import { useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { Button, Form} from "react-bootstrap";


export default function SearchingPackage() 
{
  const [startdate, setStartDate] = useState("");
  const [allpackages, setAllPackages] = useState([]);
  // const [location, setLocation] = useState();
  const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:8080/getAllPackagesForTourist")
       .then((resp) => resp.json())
      .then((pkgs) => setAllPackages(pkgs));

       console.log("i sreaching")
 

    }, []);




  const sendData = () => {
    console.log(startdate);
    fetch("http://localhost:8080/getpackagesbydate?sdate=" + startdate)
      //.then(resp=>console.log(resp))
      .then((resp) => resp.json())
      // .then(resp=>console.log(resp))
      .then((pkgs) => setAllPackages(pkgs));

     
  };

  const [toggle, setToggle] = useState({});
  const [isActive, setActive] = useState(false);


  function toggleFunction(id) {
    setToggle({
        ...toggle,
        [id]: !toggle[id],
    });
    
    }

// -------------------------------------------------------------------------------
//search by location
    
    const init={
      "boardinglocation":"",
      "location":""
    }


    const reducer = (state,action) => {
      switch(action.type)
      {
          case 'update':
               return {...state ,[action.fld]:action.val}
          case 'reset':
               return init;
      }
  
     }
     const [info,dispatch] =useReducer(reducer,init);

     console.log( info.location);
     console.log( info.boardinglocation);
    const sendData1= (e) => {

      
      console.log(startdate);
     
      fetch("http://localhost:8080/getpackagesbylocation?location=" + info.location+"&boardinglocation="+info.boardinglocation)
      //.then(resp=>console.log(resp))
      .then((resp) => resp.json())
      // .then(resp=>console.log(resp))
      .then((pkgs) => setAllPackages(pkgs));
      // alert(allpackages);
    };
  
   

    const gotoBookTour=(i)=> {


      const tinfo =(localStorage.getItem("loggedtourist"));
      if(tinfo == null)
      {
           alert("Please Login to Book Tour");
           
      }
      else 
      {    
        console.log(allpackages[i].availseats); 

        if(allpackages[i].availseats==0)
        {
          alert("Tour is already booked");
        } 
        else
        { 
          console.log(allpackages[i]);
          const onepackge=allpackages[i];
          localStorage.setItem("packageforBookTour",JSON.stringify(allpackages[i]));
          navigate("/booktour",{state :{onepackge}});
        }
      }
    

}

var locbtn=0;
if(info.location != ""  && info.boardinglocation != "")
  {
    locbtn=1;
   
  }
  
  var datebtn=0;
  var todaysDate=new Date()
  var startdate1=new Date(startdate)
if(startdate1>todaysDate)
  {
    datebtn=1;
    
  }

  return (
    <div >
       <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="Form-DateSearch">
            <div>
              <h4>Show</h4>
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="date"
                      placeholder="Select Date"
                      name="startdate"
                      id="startdate"
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                    />
                    {/* <Form.Text className="text-muted">
                                    </Form.Text> */}
                  </Form.Group>

                  <Button
                    id="btnsearch"
                    type="button"
                    onClick={(e) => {
                      sendData(e);
                    }} disabled={ datebtn ? false : true}
                  >
                    search by date
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="Form-DateSearch">
            <div>
              <h4>Enter Location To Search</h4>
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                      type="text"
                      placeholder="Boarding location"
                      name="boardinglocation"
                      id="boardinglocation"
                        onChange={(e)=>{dispatch({type:'update',fld:"boardinglocation", val: e.target.value})}}
                    />
                    {/* <Form.Text className="text-muted">
                                    </Form.Text> */}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Destination"
                      name="location"
                      id="location"
                      onChange={(e)=>{dispatch({type:'update',fld:"location", val: e.target.value})}}
                      
                    />
                    {/* <Form.Text className="text-muted">
                                    </Form.Text> */}
                  </Form.Group>

                  <Button
                    id="btnsearch"
                    type="button"
                    onClick={(e) => {
                      sendData1(e); 
                    }} disabled={ locbtn ? false : true}
                  >
                    search by location
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>

      {/* <h1>{info.location.value}</h1> */}



      <h1>Book Your Trek</h1>
      <div className="c-TouristPortal-1">
        {allpackages.map((allpk,i) => {
          return (
            <div class="c-TouristPortal">
              <div className="c-touristpackageimages">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 25,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={true}
                  className="mySwiper"
                >
                  {allpk.packageidobj.packimageobj.map((img, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <img
                          src={`data:image/jpeg;base64,${img && img.packimage}`}
                          className="c-touristsingleimage"
                          alt=""
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <div className="card-body c-card-content">
                <h4 className="card-title">{allpk.packageidobj.packagename}</h4>

                <h6>
                  <BsCurrencyRupee />
                  {allpk.packageprice}
                </h6>
                {/* <h6>{allpk.packageidobj.description}</h6> */}
                <h6>
                  <span>Start Date&ensp; &ensp;</span>
                  <span>Book Till</span>
                  <br />
                  <span>{allpk.startdate}&ensp; &ensp;</span>
                  <span>{allpk.lastdate_apply}</span>
                </h6>

                <button id="c-dispimgbtn-tourist" onClick={() => toggleFunction(allpk.tour_id)}>Show More</button>
              </div>

              <div className="c-mainpackageallinfo" style={{ display: toggle[allpk.tour_id] ? "block" : "none" }}>
                <div className="c-packageallinfo">
                  <div className="c-1divinfo">
                    <table
                      className="table border"
                      // border={1}
                    >
                      <tr>
                        <td colspan={2}>
                          <h1>{allpk.packageidobj.packagename}</h1>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Start Date </h5>
                        </td>
                        <td>
                          <h5>{allpk.startdate}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Last Date</h5>
                        </td>
                        <td>
                          <h5>{allpk.lastdate}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Last Date To Apply</h5>
                        </td>
                        <td>
                          <h5>{allpk.lastdate_apply}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                         
                          <h5>Package Price</h5>
                        </td>
                        <td>
                          <h5>
                            <BsCurrencyRupee />
                            {allpk.packageprice}
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        
                          <h5>Duration</h5>
                        </td>
                        <td>
                          <h5>{allpk.packageidobj.duration}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          
                          <h5>Capacity</h5>
                        </td>
                        <td>
                          <h5>{allpk.packageidobj.tourist_capacity}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          
                          <h5>Available Seats</h5>
                        </td>
                        <td>
                          <h5>{allpk.availseats}</h5>
                        </td>
                      </tr>
                      
                    </table>
                  </div>
                  <div className="c-2divinfo">
                    <h3>Description</h3>
                    <div><h5>{allpk.packageidobj.description}</h5>

                    </div>
                    <br></br>
                    <h3>Locations</h3>
                       
                       <h5>{allpk.packageidobj.locations}</h5>
                     
                  </div>


                 
                         
                         
                </div>
                <div className="c-packagebtntourist">
                 
                  <div>
                    <button className="" id="c-dispimgbtn-tourist1" onClick={()=> gotoBookTour(i)}>
                      Book Tour 
                    </button>
                  </div>

                  <div>
                    <button className="" id="c-dispimgbtn-tourist1" onClick={() => toggleFunction(allpk.tour_id)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}