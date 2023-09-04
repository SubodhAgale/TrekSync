import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import {BsCurrencyRupee} from "react-icons/bs"

export default function ApprovePlanTour() {

    const [approvepack, setApprovepack] = useState([]);
    // const[msg,setMsg]=useState("")
    useEffect(() => {
        fetch("http://localhost:8080/getallplantour")
              .then(resp => resp.json())
              .then(pkgs => setApprovepack(pkgs))
             
            
    //   if(approvepack.length == 0)
    //   {
    //       setMsg("No approval pending")
    //   }
    //   else{
    //       setMsg("")
    //   }
      },[]);  // load without refresh
  

console.log(approvepack)
    const navigate = useNavigate();
    const rejecttour = (id) =>{
        fetch("http://localhost:8080/rejecttour?tid="+id)
        .then(resp => {if(resp.ok)
            { 
                  console.log(resp)
                  alert("Rejected")               
                  return resp.text();
            }
          else
            {

              throw  new Error("server error")  
            }
          })
    }
    const approvetour = (id) =>{
       
        fetch("http://localhost:8080/approvetour?tid="+id)
        .then(resp => {if(resp.ok)
            { 
                  console.log(resp)
                  alert("Aprroved")               
                  return resp.text();
            }
          else
            {
           
              throw  new Error("server error")  
            }
          })

          
     }
   

   

  

    return (
        <div>
           
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h1>Approve Planned Tours</h1>
                        <table className="c-disppackagetable">
                            <tr>
                                <th>packagename</th>
                                <th>startdate</th>
                                <th>lastdate</th>
                                <th>availseats</th>
                                <th>lastdate_apply</th>
                               
                                <th>packageprice</th> 
                                <th>locations</th>  
                                
                                <th>Approve Tour</th> 
                                <th>Reject</th>
                            </tr>
                            {
                                approvepack.map(allpk => {
                                    return <tr >
                                        <td>{allpk.packageidobj.packagename}</td>
                                        <td >{allpk.startdate}</td>
                                        <td>{allpk.lastdate}</td>
                                        <td>{allpk.availseats}</td>
                                        <td>{allpk.lastdate_apply}</td>
                                        
                                        <td>  <BsCurrencyRupee />{allpk.packageprice} /-</td>
                                        <td>{allpk.packageidobj.locations}</td>
                                       
                                        <td>  
                                            <button className="btn  btn-block" id="c-dispimgbtn" onClick={() => approvetour(allpk.tour_id)}>Approve</button>
                                        </td>
                                        <td>  
                                            <button className="btn  btn-block" id="c-dispimgbtn" onClick={() => rejecttour(allpk.tour_id)}>Reject</button>
                                        </td>
                                    </tr>
                                   


                                })
                            }
                        </table>
                            {/* <h3>{msg}</h3> */}
                    </Col>
                </Row>
            </Container>

        </div>

    )
}