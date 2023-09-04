import { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import {BsCurrencyRupee} from "react-icons/bs"
import "../CSS/Style.css";
import { useLocation } from "react-router-dom";


export default function BookTour(props) {

    const [packageinfo, setPackaheinfo] = useState([]);
    const [touristinfo, setTousristinfo] = useState([]);
    const [show, setShowvalue] = useState();

    const location = useLocation();

    // console.log(location.state);
    // console.log("... pkg"+location.state.onepackge.tour_id)
    const selectedtour = location.state.onepackge;
    // console.log(JSON.stringify(selectedtour))
    // console.log("... selcted"+selectedtour.tour_id)


    // useEffect(() => {


    //     const pinfo =JSON.parse(localStorage.getItem("packageforBookTour"));
    //     console.log("....const"+pinfo);
    //     setPackaheinfo(pinfo);
    //     console.log("....state"+packageinfo);
    //     console.log("...."+packageinfo.tour_id);

    //     // const tinfo = (localStorage.getItem("loggedtourist"));
    //     // console.log("....const"+tinfo);
    //     // setTousristinfo(JSON.parse(tinfo));
    //     // console.log("...."+touristinfo);
    //     // console.log(touristinfo.t_fname);

    // },[])
    const [toggle, setToggle] = useState({});

    useEffect(() => {

        const tinfo =(localStorage.getItem("loggedtourist"));
       console.log(tinfo);
       
       // console.log("....const"+(tinfo));
        setTousristinfo(JSON.parse(tinfo)); 
        //console.log("...."+touristinfo.t_fname);
       
        //console.log("...."+touristinfo.t_fname);
    },[])

    // const toggleFunction= (id) =>{
    //     setToggle(id)
    //     console.log("in toggle id .."+id)

    //    }

    const init = {
        travellernumber: { value:1, hasError: false, touched: true, error: "" },
         paymenttype: { value:"", hasError: true, touched: false, error: "" },
        // status:0,
        isFormValid: false
         }

        

         const reducer = (state, action) => {
            //console.log(state);
            switch (action.type) {
                case 'update': {
                    const { name, value, hasError, error, touched, isFormValid } = action.data;
                    return {
                        ...state,
                        [name]: { ...state[name], value, hasError, error, touched },
                        isFormValid
                    }   //modifying and returning new object as state
                }
                case 'reset': {
                    return init;
                }
            }
        }

     
     
        const onInputChange = (name, value, dispatch) => {
            //validation logic
            const { hasError, error } = validateData(name, value); //form field, latest value
    
            //which key to be modified - value, hasError, error, touched 
            let isFormValid = true;
            for (const key in info) {
                let item = info[key];
               /* if(key === name && hasError)
                {
                    isFormValid = false;
                    break;
                }
                else if(key !== name && item.hasError)
                {
                    isFormValid = false;
                    break;
                }*/
                if (item.hasError) {
                    isFormValid = false;
                    break;
                }
            }
            //gethered one more value - isFormValid
            //dispatch({type:'update',data:{name,value,hasError,error,touched: true, isFormValid}})
    
            //sending action object
            dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
    
        }


      

            const onFocusOut = (name, value, dispatch) => {
                const { hasError, error } = validateData(name, value)
                let isFormValid = true
                for (const key in info) {
                    const item = info[key]
                    if (key === name && hasError) {
                        isFormValid = false
                        break
                    } else if (key !== name && item.hasError) {
                        isFormValid = false
                        break
                    }
                }
                dispatch({
                    type: "update",
                    data: { name, value, hasError, error, touched: true, isFormValid },
                })
            }

           


            
    const validateData = (name, value) => {
        let hasError = false, error = "";
   
        switch (name) {
            case "travellernumber":
            
               if(value<=0 || value>selectedtour.availseats)
               {
                    hasError = true;
                    error = "Enter number between 1 to "+selectedtour.availseats+""
              }
              break;
           
             
              }
              return { hasError, error }
        }


        const [info,dispatch] =useReducer(reducer,init);




        // -------------------------------------------------------------------------------------------------




        const inittrav = {
            fname: { value:"", hasError: true, touched: false, error: "" },
             lname: { value:"", hasError: true, touched: false, error: "" },
             bdate: { value:"", hasError: true, touched: false, error: "" },
             gender: { value:"", hasError: true, touched: false, error: "" },
    
            // status:0,
            isFormValidtrav: false
             }
    

             const reducertrav = (state, action) => {
                //console.log(state);
                switch (action.type) {
                    case 'update': {
                        const { name, value, hasError, error, touched, isFormValidtrav } = action.data;
                        return {
                            ...state,
                            [name]: { ...state[name], value, hasError, error, touched },
                            isFormValidtrav
                        }   //modifying and returning new object as state
                    }
                    case 'reset': {
                        return inittrav;
                    }
                }
            }


            const onInputChangetrav = (name, value, dispatchtrav) => {
                //validation logic
                const { hasError, error } = validateDatatrav(name, value); //form field, latest value
        
                //which key to be modified - value, hasError, error, touched 
                let isFormValidtrav = true;
                for (const key in info) {
                    let item = info[key];
                   /* if(key === name && hasError)
                    {
                        isFormValid = false;
                        break;
                    }
                    else if(key !== name && item.hasError)
                    {
                        isFormValid = false;
                        break;
                    }*/
                    if (item.hasError) {
                        isFormValidtrav = false;
                        break;
                    }
                }
                //gethered one more value - isFormValid
                //dispatch({type:'update',data:{name,value,hasError,error,touched: true, isFormValid}})
        
                //sending action object
                dispatchtrav({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValidtrav } })
        
            }


             
            const onFocusOuttrav = (name, value, dispatchtrav) => {
                const { hasError, error } = validateDatatrav(name, value)
                let isFormValidtrav = true
                for (const key in info) {
                    const item = info[key]
                    if (key === name && hasError) {
                        isFormValidtrav = false
                        break
                    } else if (key !== name && item.hasError) {
                        isFormValidtrav = false
                        break
                    }
                }
                dispatchtrav({
                    type: "update",
                    data: { name, value, hasError, error, touched: true, isFormValidtrav },
                })
            }


            
                    
        const validateDatatrav = (name, value) => {
            let hasError = false, error = "";
    
            switch (name) {
                case "fname":
                    let regex2 = /^[A-Za-z]{1,15}$/;

                    if (!regex2.test(value)) {
                        hasError = true;
                        error = "First Name Should be valid "
                    }
                break;

                case "lname":
                
                let regex3 = /^[A-Za-z]{1,15}$/;

                if (!regex3.test(value)) {
                    hasError = true;
                    error = "Last Name Should be valid "
                }
                break;

                case "bdate":
                
                var todaysdate = new Date();
                console.log("date-----------"+todaysdate);
                var bdate1 = new Date(infotrav.bdate.value); 
                if (bdate1>todaysdate) {
                    hasError = true;
                    error = "birth date should be valid"
                }
                break;


                }
                return { hasError, error }
            }


        const [infotrav,dispatchtrav] =useReducer(reducertrav,inittrav);




        var totamount =   (selectedtour.packageprice) * (info.travellernumber.value);
        var donebtn = info.travellernumber.value
        console.log("total "+totamount);
        console.log("type "+info.paymenttype.value);
        console.log("tid "+ selectedtour.tour_id);

//----------------------------------------------------------------------------------------------------

//--------------------------------------- sending data to book tour-----------------
const[orderid,setOrder]=useState(null);
const[travellerid,setTraveller]=useState(null);

       const sendData = (e)=>{
        e.preventDefault();
        const reqOptions = {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
          touristid : touristinfo.tourist_id ,
          tourid: selectedtour.tour_id,
          travellernumber:info.travellernumber.value,
          totamount:totamount,
          paymenttype:info.paymenttype.value,
         
        })
     }
     fetch("http://localhost:8080/Booktourbytourist",reqOptions)
     .then(resp => {if(resp.ok)
                      { 
                        return resp.text();
                      }
                    else
                      {
                     
                        throw  new Error("server error")  
                      }
                    })
     .then(text => text.length ? JSON.parse(text):{})
     .then(obj => {
        setOrder(obj);
        if (obj) {

            console.log("object---------------"+JSON.stringify(obj));
            if(donebtn > 1)
            {
           
            alert("Please enter "+((info.travellernumber.value)-1)+" traveller information ");
            setInvoice(donebtn)
            }
            else
            alert("click on Done button");
           
        }
        else {
            alert("failed in Booking ");
           
        }
     })
    }
    
// ------------------------------------ sending traveller data -------------------------------------


const[invoice,setInvoice] = useState();


console.log(invoice+"-----0000000000000")

console.log("type "+infotrav.fname.value);
console.log("type "+infotrav.lname.value);
console.log("type "+infotrav.bdate.value);
console.log("type "+infotrav.gender.value);
// 

const sendDataoftraveller =(e) =>{
    console.log("in traveller send func")
    console.log("type "+orderid.order_id);
    e.preventDefault();
    const reqOptions = {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
         fname:infotrav.fname.value,
         lname:infotrav.lname.value,
         gender:infotrav.gender.value,
         bdate:infotrav.bdate.value,
         orderid:orderid.order_id,
         
        })
     }
     setInvoice(invoice-1);
     console.log(invoice+"in send")
    
    
    fetch("http://localhost:8080/insertTravellerInfo",reqOptions)
    .then(resp => {if(resp.ok)
        { 

            if(invoice==2)
            {
              alert("success")

            }
          return resp.text();
         
        }
      else
        {
       
          throw  new Error("server error")  
        }
      })
   
     

}


var oid="";
var tid="";
var totamt="";
var travno="";
var msg="";

   const getinvoice = ()=>{


   console.log("-------"+orderid.order_id);
   oid = "Order Id is : "+orderid.order_id;
   console.log("-------"+oid);
   console.log("-------"+orderid.trasaction_idobj.transaction_id);
   tid =  "Transaction Id is : "+orderid.trasaction_idobj.transaction_id;
   console.log(""+totamount);
   totamt = "Paid Amount : "+totamount+" /-";
   console.log(""+info.travellernumber.value);
   travno = "Tour Booked for "+info.travellernumber.value+" Traveller";
   msg ="Enjoyy Your Trip ...";


   document.getElementById("oid").innerHTML = oid;
   document.getElementById("tid").innerHTML = tid;
   document.getElementById("totamt").innerHTML = totamt;
   document.getElementById("travno").innerHTML = travno;
   document.getElementById("msg").innerHTML = msg;
        
   }   
   
  
  

    return (
        <div>
            <NavbarComponent ></NavbarComponent>

            <Container>
               <div className="c-Booktourcontainer" >
                    <Row md={2} >
                      
                        <Col>
                            <div className="c-booktourinnerdiv">
                            <Form>
                                <table  className="c-tabletouristinfo">
                                <tr>
                                    <th colSpan={2}>
                                <h2>Your Info </h2>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Name :</h5>
                                    </td>
                                    <td>
                                      <h5> {touristinfo.t_fname}   {touristinfo.t_lname}</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Contact :</h5>
                                    </td>
                                    <td>
                                      <h5> {touristinfo.t_contact} </h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Email :</h5>
                                    </td>
                                    <td>
                                      <h5> {touristinfo.t_email} </h5>
                                    </td>
                                </tr>
                               
                                </table>
                           
                            
                           <table className="c-tabletouristinfo">
                                <tr >
                                    <th colSpan={2}>
                                           <h2>
                                             {/* {packageinfo.packageidobj.packagename}  */}
                                             {selectedtour.packageidobj.packagename}
                                             {/* {touristinfo.t_fname} */}
                                          </h2> 
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Enter number of traveller :</Form.Label>
                                    </td>
                                   
                                    <td>
                                    <Form.Control type="number" placeholder="Traveller" name="travellernumber" id="travellernumber"
                                    
                                    value={info.travellernumber.value}
                                    onChange={(e) => { onInputChange("travellernumber", e.target.value, dispatch) }}
                                    onBlur={(e) => { onFocusOut("travellernumber", e.target.value, dispatch) }}       
                    
                                    />
                                    <p style={{ display: info.travellernumber.touched && info.travellernumber.hasError ? "block" : "none", color: "red" }}> {info.travellernumber.error} </p>

                                    </td>
                                    
                                </tr>
                              
                                <tr >

                                      <td>
                                       <Form.Label>Total Amount : </Form.Label>
                                    </td>
                                   
                                    <td>
                                    <h5>  <BsCurrencyRupee />
                                      {/* {selectedtour.packageidobj.packageprice}  */}
                                      {totamount} /-
                                     </h5>
                                    </td>
                                
                                </tr>
                              


                           </table>
                           
                         
                           <table className="c-tabletouristinfo">
                                <tr >
                                    <th colSpan={2}>
                                           <h3>
                                              Payment Process
                                          </h3> 
                                    </th>
                                </tr>
                                <tr >
                                <td>
                                    <Form.Label>Select Payment Type :</Form.Label>
                                    </td>
                                   
                                    <td>
                                    <Form.Select aria-label="Default select example" name="paymenttype"
                                     value={info.paymenttype.value}
                                     onChange={(e) => { onInputChange("paymenttype", e.target.value, dispatch) }}
                                     onBlur={(e) => { onFocusOut("paymenttype", e.target.value, dispatch) }}       
                                     required   >
                                    <option> Payment Type</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Net Banking">Net Banking</option>
                                    <option value="Card Payment">Card Payment</option>
                                    </Form.Select>
                                    </td>
                                   
                                </tr>
                                <tr className="c-bookbuttondiv" >
                                   <td>
                                   <button type="submit" className="btn  btn-block" id="c-bookbutton" disabled={info.isFormValid ? false : true} onClick={(e) => { sendData(e) }}>Book</button>

                                   </td>
                                   <td>
                                   <button type="reset" className="btn  btn-block c-bookbutton" id="c-bookbutton" onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>

                                   </td>
                                </tr>
                            </table>
                            </Form>
                            </div>
                        </Col>
                        <Col>
                            <div className="c-booktourinnerdiv " >
                               
                                 {console.log("in return")}
                                 <div className="c-travellerform" > 
                              
                                   {/* <button className="btn  btn-block" id="c-bookbutton" onclick={() => toggleFunction(1)}>Add</button> */}

                    
                                     <Form>
                                        <table className="c-tabletouristinfo" >
                                        {/* style={{ display : toggle ? "block" : "none" }} */}
                                        <tr>
                                                <th colspan={2}>
                                                     <h4>Traveller Form</h4>
                                                </th>
                                       </tr>
                                        
                                 <tr>
                                           
                                    <td>
                                    <Form.Label>Enter First Name :</Form.Label>
                                    </td>
                                   
                                    <td>
                                    <Form.Control type="text" placeholder="first name" name="fname" id="fname"
                                      value={infotrav.fname.value}
                                      onChange={(e) => { onInputChangetrav("fname", e.target.value, dispatchtrav) }}
                                      onBlur={(e) => { onFocusOuttrav("fname", e.target.value, dispatchtrav) }}       
                                      required/>
                                    <p style={{ display: infotrav.fname.touched && infotrav.fname.hasError ? "block" : "none", color: "red" }}> {infotrav.fname.error} </p>

                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Enter Last Name  :</Form.Label>
                                    </td>
                                   
                                    <td>
                                    <Form.Control type="text" placeholder="last name" name="lname" id="lname"
                                       value={infotrav.lname.value}
                                       onChange={(e) => { onInputChangetrav("lname", e.target.value, dispatchtrav) }}
                                       onBlur={(e) => { onFocusOuttrav("lname", e.target.value, dispatchtrav) }}       
                                       required/> 
                                    <p style={{ display: infotrav.lname.touched && infotrav.lname.hasError ? "block" : "none", color: "red" }}> {infotrav.lname.error} </p>

                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Select Gender:</Form.Label>
                                    </td>
                                   
                                    <td>
                                    <Form.Check    type="radio"     label="Female"  name="gender" id="gender"  value="F"
                            
                                     onChange={(e) => { onInputChangetrav("gender", e.target.value, dispatchtrav) }}
                                     onBlur={(e) => { onFocusOuttrav("gender", e.target.value, dispatchtrav) }}       
                                     required/>

                                    <Form.Check    type="radio"     label="Male"  name="gender" id="gender" value="M"
                                    
                                     onChange={(e) => { onInputChangetrav("gender", e.target.value, dispatchtrav) }}
                                     onBlur={(e) => { onFocusOuttrav("gender", e.target.value, dispatchtrav) }}       
                                     required />
                                           
                                           
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                    <Form.Label>Select Birthdate :</Form.Label>
                                    </td>
                                   
                                    <td>
                                    <Form.Control type="date"  name="bdate" id="bdate"
                                        value={infotrav.bdate.value}
                                     onChange={(e) => { onInputChangetrav("bdate", e.target.value, dispatchtrav) }}
                                     onBlur={(e) => { onFocusOuttrav("bdate", e.target.value, dispatchtrav) }}       
                                     required/>
                                    <p style={{ display: infotrav.bdate.touched && infotrav.bdate.hasError ? "block" : "none", color: "red" }}> {infotrav.bdate.error} </p>

                                    </td>
                                    
                                </tr>
                                <tr className="c-bookbuttondiv" >
                                   <td>
                                   <button type="submit" className="btn  btn-block" id="c-bookbutton" disabled={ (invoice==1) ? true : false} onClick={(e) => { sendDataoftraveller(e) }}>Submit</button>
                                 
                                 

                                   </td>
                                   <td>
                                   <button type="reset" className="btn  btn-block c-bookbutton" id="c-bookbutton" onClick={() => { dispatchtrav({ type: 'reset' }) }} >reset</button>

                                   </td>
                                </tr>
                                   <tr className="c-finalbookbutton" >
                                   <td colSpan={2}>
                                   <button type="button" className="btn  btn-block" id="c-getinvoicebutton" disabled={ (invoice>1) ? true : false} onClick={(e) => { getinvoice()}}>get Invoice</button>

                                   </td>
                                </tr>
                                        </table>
                                        </Form>       
                                 </div>



                                <div>
                                    <h4><b>Order Invoice</b></h4>
                                 
                                 <table width="100%">
                                    <tr>
                                        <td> <h5 id="oid"></h5></td>
                                        <td><h5 id="tid"></h5></td>
                                    </tr>
                                    <tr>
                                        <td>  <h5 id="totamt"></h5></td>
                                        <td><h5 id="travno"></h5></td>
                                    </tr>
                                    <tr><td colspan={2}>
                                    <h5 id="msg"></h5>
                                    </td>
                                    </tr>
                                 </table>
                                  
                                    
                                  
                                    
                                   

                                </div>


                            </div>
                        </Col>
                    </Row>
             </div>
            </Container>
        </div>
    )
}