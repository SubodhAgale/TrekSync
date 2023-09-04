import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "../CSS/Style.css";
import { Row, Col } from "react-bootstrap";
import beach from "../Images/beach.jpg";
import { Slide } from "pure-react-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";


export default function DisplayPackageForEmp() {

    const [allpackages, setAllPackages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getallpackagesforemp")
            .then(resp => resp.json())
            .then(pkgs => setAllPackages(pkgs))

    },[]);  // chnage this to load without refresh


    //const [isActive, setActive] = useState("false");

    // const handleToggle = () => {
    //     setActive(!isActive);
    // };

    const [toggle, setToggle] = useState({});
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();


    function toggleFunction(id) {
        setToggle({
            ...toggle,
            [id]: !toggle[id],
        });

    }

    // function goToplantour() {
    //            navigate("plantour")
    //  }


     const goToplantour = (i) =>{

        // localStorage.setItem("packageidforplantour",id)
        console.log(allpackages[i]);
        const forplan = allpackages[i];
        navigate("plantour",{state :{forplan}});
     }

     const deletePackage =(id) =>
     {
        fetch("http://localhost:8080/deletepackage?packid="+id)
        .then(resp => {
            if(resp.ok)
            { 
                console.log(resp)
               // alert("Package deleted successfully")
                return resp.text();
            }
          else
            {
               console.log("server error")
              throw  new Error("server error")  
            }
          })
          .then(text => text.length ? JSON.parse(text):{})
        .then(obj => {
                // console.log(obj);           
                // if(obj==null)
                // {
                //     alert("Package deleted successfully");
                // }
                // {
                //     alert("Tour is ongoing can not delete");
                // }
                if(Object.keys(obj).length===0)
                {

                    alert("Package deleted successfully");
                }
                else{
                    alert("Tour is ongoing can not delete");
                }
        })
     }

    return (
        <div>
           
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Available Packages for Trek Plan</h1>
                        <br></br>
                        <table className="c-disppackagetable">
                            <tr>
                                <th>Package ID</th>
                                <th>Package Name</th>
                                <th>Duration</th>
                                <th>Tourist Capacity</th>
                                <th>Description</th>
                                <th>Boarding location</th>
                                <th>Destination</th>
                                <th>Images</th>
                                <th>Planned Tour</th>
                                <th>Delete Package</th>
                               
                            
                            </tr>
                            {
                                allpackages.map((allpk,i) => {
                                    return <tr>
                                        <td>{allpk.package_id}</td>
                                        <td><b>{allpk.packagename}</b></td>
                                        <td>{allpk.duration} Days</td>
                                        <td>{allpk.tourist_capacity}</td>
                                        <td>{allpk.description}</td>
                                        <td>{allpk.boardinglocation}</td>
                                        <td>{allpk.locations}</td>
                                      
                                    

                                        <td>
                                        <div  style={{ display: toggle[allpk.package_id] ? "block" : "none" }} className="c-disppackageimages">
                                                    <Swiper
                                                         effect={"coverflow"}
                                                         grabCursor={true}
                                                         centeredSlides={true}
                                                         slidesPerView={"auto"}
                                                        coverflowEffect={{
                                                            rotate: 50,
                                                            stretch: 0,
                                                            depth: 100,
                                                             modifier: 1,
                                                             slideShadows: false,
                                                         }} 
                                                        pagination={true}
                                                        className="mySwiper"
                                                        
                                                    >
                                            // Using array


                                                        { allpk.packimageobj.map((img, i) => {
                                                            return (
                                                                <SwiperSlide key={i}>
                                                                    <img src={`data:image/jpeg;base64,${img && img.packimage}`} className="c-dispsingleimage" alt="" />
                                                                </SwiperSlide>
                                                            );
                                                        })}
                                                    </Swiper>
                                                    <button className="btn  btn-block" id="c-dispimgbtn" onClick={() => toggleFunction(allpk.package_id)}>"Hide Images" </button>
                                                </div>
                                                <button className="btn  btn-block" id="c-dispimgbtn" onClick={() => toggleFunction(allpk.package_id)}>{toggle[allpk.package_id] ? "Hide Images" : "Show Images"}</button>
                                        </td>
                                        <td>
               
                                            <button className="btn  btn-block" id="c-displanbtn" onClick={() => goToplantour(i)}>Plan</button>
                                                 {/* localStorage.setItem("loggedinfo",JSON.stringify(obj)) */}
                                        </td>
                                         <td>
                                            <button className="btn  btn-block" id="c-displanbtn" onClick={() => deletePackage(allpk.package_id)}>Delete</button>

                                         </td>        
                                        
         
                                       

                                    </tr>
                                   


                                })
                            }
                        </table>

                    </Col>
                </Row>
            </Container>

        </div>

    )
}







// ------------------------------------------------
// <td>
// <div className="c-dispimages">
//     <div className="c-disppackageimages" style={{ display: toggle[allpk.package_id] ? "block" : "none" }}>

     
//         <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">

//             <div class="carousel-inner">

//                 <div class="carousel-item active">

//                     <img src={beach} alt="..."></img>
//                 </div>

//                 {
//                     allpk.packimageobj.map(imgarr => {
//                         return <div class="carousel-item">
//                             <img src={`data:image/jpeg;base64,${imgarr && imgarr.packimage}`} alt="..." className="c-dispsingleimage"></img>
//                         </div>

//                         {/* <img src={`data:image/jpeg;base64,${imgarr && imgarr.packimage}`} className="c-dispsingleimage" /> */ }


//                         {/* <button onClick={handleToggle}>Toggle class</button> */ }

//                     })

//                 }

//             </div>

//             <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a>
//         </div>




//     </div>
//     <button className="btn  btn-block" id="c-dispimgbtn" onClick={() => toggleFunction(allpk.package_id)}>{toggle[allpk.package_id] ? "Hide Images" : "Show Images"}</button>
// </div>
// </td>
