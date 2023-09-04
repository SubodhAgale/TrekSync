import { useEffect, useReducer, useState } from "react";
import { Button, Row,Col, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { format } from 'date-fns'
export default function PlanTourComponent(){

  
    const [empId, setempId] = useState()
    const [packageId, setPackageId] = useState()

    const location = useLocation();
    const selectedpkg = location.state.forplan;
    console.log(selectedpkg);
    console.log(selectedpkg.package_id);

    
    useEffect(()=> {
      //logic for getting a value from local storage stored under the key 'key'
      const empid = (localStorage.getItem('EmployeeId'));
      console.log("Employee ID "+empid)
      setempId(empid)

      // const packageidses= (localStorage.getItem('packageidforplantour'));

      // setPackageId(packageidses);
   
    },[])
 
    console.log("Package ID "+packageId)
    console.log(empId)

    const init = {
      startdate: { value: "", hasError: true, touched: false, error: "" },
      lastdate: { value: "", hasError: false, touched: true, error: "" }, 
      lastdate_apply: { value: "", hasError: true, touched: false, error: "" },
      // duration: { value: "", hasError: false, touched: true, error: "" },
      // availseats:{ value: 0, hasError: false, touched: true, error: "" },
      // employeeid:{ value: 0, hasError: false, touched: true, error: "" },
      // packageidobj:{ value: 0, hasError: false, touched: true, error: "" },
      packageprice:{value: 0, hasError: true, touched: false, error: ""},
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
      const [info,dispatch] =useReducer(reducer,init);
      const navigate = useNavigate();


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

      
       const sendData = (e)=>{
        e.preventDefault();
        const reqOptions = {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
          startdate : info.startdate.value,
          lastdate: lastdate11, 
          lastdate_apply: info.lastdate_apply.value,
          availseats:selectedpkg.tourist_capacity,
          employeeid:empId,
          packageidobj:selectedpkg.package_id,
          packageprice:info.packageprice.value
        })
     }
     fetch("http://localhost:8080/addPlannedTour",reqOptions)
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
        if (obj) {
            alert("successfully planned Trek");
            navigate("/employee_home");
        }
        else {
            alert("failed in planning ");
            navigate("plantour");
        }
     })
    }
  

    var startdate1=new Date(info.startdate.value)
  //  var lastdate1 = new Date(info.lastdate.value);
    var lastdateapply1 = new Date(info.lastdate_apply.value);

    let todaysDate = new Date()
    console.log("todaysdate "+todaysDate)
    console.log("Startdate "+startdate1)
    //console.log("lastdate "+lastdate1)
    var duration1=parseInt(selectedpkg.duration);
   // var days1=duration1*86400000
    var lastdate1=new Date(info.startdate.value)
  
lastdate1.setDate(lastdate1.getDate()+duration1)
console.log(lastdate1)
var lastdate11=new Date(lastdate1)
let lastdate111 = lastdate11.getDate() + '-' + parseInt(lastdate11.getMonth() + 1) + '-' + lastdate11.getFullYear()
console.log(lastdate11)
console.log(lastdate111)



// var lastdate111=format(new Date(lastdate11), 'dd-MM-yyyy')
// console.log("formated date"+lastdate111)
// var lastdate11=new Date(lastdate1.getDay(),lastdate1.getMonth(),lastdate1.getFullYear())
//console.log(formatDate(lastdate1))
  // var duration1=(lastdate1-startdate1)/86400000
  // var strduration = duration1+" days";
  // console.log("duration"+strduration)



    const validateData = (name, value) => {
     let hasError = false, error = "";

     switch (name) {
         case "startdate":
         
            if(startdate1<todaysDate || value=="")
            {
                 hasError = true;
                 error = "Starting date Should be after Today"
              
           }
           
           break;
      
        case "lastdate_apply" :
          if(lastdateapply1>=startdate1 || value=="")
          {
            hasError = true;
            error = "Last Date to apply should be before start date"
         
      }
        break;
           case "packageprice":
            if(value<0 || value=="")
            {
              hasError = true;
                error = "Price Should be valid"
            }
           break;
           default :
           }
           return { hasError, error }
     }
    return (
       <div>
       
        {/* <div class="d-flex justify-content-around"> */}
        <h3><b>Plan Tour</b></h3>
          <div>
            <Container>
                                    <Form>
             <Row md={2}>
                        <Form.Group>
                      <Col>
                   
                        <Form.Label>Start Date</Form.Label>
                        
                        <Form.Control className="mb-3" size = "lg" type="date" 
                                        placeholder="startdate"  name="startdate" id="startdate" 
                                        value={info.startdate.value}
                                        onChange={(e) => { onInputChange("startdate", e.target.value, dispatch) }}
                                        onBlur={(e) => { onFocusOut("startdate", e.target.value, dispatch) }}   
                                        required  />
                        <p style={{ display: info.startdate.touched && info.startdate.hasError ? "block" : "none", color: "red" }}> {info.startdate.error} </p>

                                       
                        </Col>
                        </Form.Group>
                    
                     
                        {/* <fieldset disabled> */}
                        <fieldset>
                        <Form.Group>
                        <Col >
                        <Form.Label>Last Date</Form.Label>
                         <Form.Control className="mb-3" size = "lg" type="date" 
                                        placeholder="lastdate"  name="lastdate" id="lastdate" 
                                        // value={lastdate111}
                                        value={info.lastdate.value}
                                        //Below code were commented to disable the last date section of Plan Tour
                                        onChange={(e) => { onInputChange("lastdate", e.target.value, dispatch) }}
                                        onBlur={(e) => { onFocusOut("lastdate", e.target.value, dispatch) }}       
                                          /> 
                      
                         </Col>
                        </Form.Group>
                        </fieldset>
                        <Form.Group>
                        <Form.Label>Last Date to apply</Form.Label>
                        <Form.Control className="mb-3" size = "lg" type="date" 
                                        placeholder="lastdate_apply"  name="lastdate_apply" id="lastdate_apply" 
                                       value={info.lastdate_apply.value}
                                        onChange={(e) => { onInputChange("lastdate_apply", e.target.value, dispatch) }}
                                        onBlur={(e) => { onFocusOut("lastdate_apply", e.target.value, dispatch) }}      
                                        required  /> 
                        <p style={{ display: info.lastdate_apply.touched && info.lastdate_apply.hasError ? "block" : "none", color: "red" }}> {info.lastdate_apply.error} </p>

                        </Form.Group>

                        <fieldset disabled>
                        <Form.Group>
                        <Form.Label>Available seats</Form.Label>
                        <Form.Control className="mb-3" size = "lg" type="number" placeholder="availseats" name="availseats" id="availseats"
                                        value={selectedpkg.tourist_capacity}
                                        onChange={(e) => { onInputChange("availseats", e.target.value, dispatch) }}
                                        onBlur={(e) => { onFocusOut("availseats", e.target.value, dispatch) }} 
                                        required/>
                        </Form.Group>
                        </fieldset>

                        </Row>  
                        
                       
                        <Row >
                          <Col>
                          <fieldset disabled>
                        <Form.Group>
                        <Form.Label>Tour Duration</Form.Label>
                        <Form.Control className="mb-3" size = "lg" type="text" placeholder="duration" name="duration" id="duration" 
                                        value={selectedpkg.duration}
                                        // onChange={(e) => { onInputChange("duration", e.target.value, dispatch) }}
                                        // onBlur={(e) => { onFocusOut("duration", e.target.value, dispatch) }} 
                           required />
                        </Form.Group>
                        </fieldset>
                        </Col>
                        <Col>
                        <fieldset disabled>
                        <Form.Group>
                        <Form.Label>Package ID</Form.Label>
                        <Form.Control className="mb-3" size = "lg" type="number" placeholder="packageidobj" name="packageidobj" id="packageidobj" 
                                        value={selectedpkg.package_id}
                                        
                                        // onBlur={(e) => { onFocusOut("packageidobj", e.target.value, dispatch) }}
                          />
                        </Form.Group>

                        </fieldset>
                        </Col>
                        <Col>
                        {/* <Form.Group>
                        <Form.Label>Employee id</Form.Label>
                        <Form.Control className="mb-3" size = "lg" type="number" placeholder="employeeid" name="employeeid" id="employeeid" 
                                        value={empId}
                                        onBlur={(e) => { onFocusOut("employeeid", e.target.value, dispatch) }}
                          />
                        </Form.Group> */}

                        <Form.Group>
                        <Form.Label>Package Price</Form.Label>
                      <Form.Control className="mb-3" size="lg" type="number"
                        placeholder="packageprice" name="packageprice" id="packageprice"
                        onChange={(e) => { onInputChange("packageprice", e.target.value, dispatch) }}
                        onBlur={(e) => { onFocusOut("packageprice", e.target.value, dispatch) }}   
                        required />
                      </Form.Group>
                      <p style={{ display: info.packageprice.touched && info.packageprice.hasError ? "block" : "none", color: "red" }}> {info.packageprice.error} </p>

                        </Col>
                        </Row>
                    

                         
            <Button variant="primary" type="submit"  onClick={(e)=>{sendData(e)}} disabled={info.isFormValid ? false : true} >
               Click here to Plan Tour
            </Button>
            {/* <button id="c-dispimgbtn">
                <Link to="/employee_home" id="c-dispimgbtn">Close</Link>
            </button> */}
          </Form>
          </Container>

         
          </div>
       </div>
      );
}


























// import { useEffect, useReducer, useState } from "react";
// import { Button } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function PlanTourComponent(){

//     // return (
//     //     <div>
//     //         <h1>int plan tour component</h1>
//     //         </div>
//     // )
//     const [empId, setempId] = useState()
//     const [packageId, setPackageId] = useState()

//     useEffect(()=> {
//       //logic for getting a value from local storage stored under the key 'key'
//       const empid = JSON.parse(localStorage.getItem('loggedemployee')).employee_id;
//       console.log("..."+empid)

//       const packageidses= (localStorage.getItem('packageidforplantour'));

//       console.log("Employee ID "+empid)
//       console.log("Employee ID "+{packageId})
      
//       setPackageId(packageidses);
//       setempId(empid)
//     },[])
 
    
//     console.log(empId)
//     console.log(  "....."+packageId)

//     const init = {
//         startdate: "",
//         lastdate: "", 
//         lastdate_apply: "",
//         duration: "",
//         availseats: 0,
//         employeeid:"",
//         packageidobj:""
//        }

//        const reducer = (state,action) => {
//         switch(action.type)
//         {
//             case 'update':
//                  return {...state ,[action.fld]:action.val}
//             case 'reset':
//                  return init;
//         }
    
//        }
       
//        const [info,dispatch] =useReducer(reducer,init);
//        const navigate = useNavigate();

//        const sendData = (e)=>{
//         e.preventDefault();
//         const reqOptions = {
//         method : 'POST',
//         headers : {'content-type':'application/json'},
//         body : JSON.stringify(info)
//      }
//      fetch("http://localhost:8080/addPlannedTour",reqOptions)
//      .then(resp => {if(resp.ok)
//                       { 
//                         return resp.text();
//                       }
//                     else
//                       {
                     
//                         throw  new Error("server error")  
//                       }
//                     })
//      .then(text => text.length ? JSON.parse(text):{})
//      .then(obj => {
//         if (obj) {
//             alert("successfully planned tour");
//             navigate("/employee_home");
//         }
//         else {
//             alert("failed in planning ");
//             navigate("plantour");
//         }
//      })
//     }
//     return (
//        <div>
//         <div class="d-flex justify-content-around">
//                       <Form>
             
//                         <Form.Group>
                        
//                         <Form.Control className="mb-3" size = "lg" type="date" 
//                                         placeholder="startdate"  name="startdate" id="startdate" 
//                                         onChange={(e)=>{dispatch({type:'update',fld:"startdate", val: e.target.value})}}    
//                                         required  />
//                         </Form.Group>
//                         <Form.Group>
                        
//                          <Form.Control className="mb-3" size = "lg" type="date" 
//                                         placeholder="lastdate"  name="lastdate" id="lastdate" 
//                                         onChange={(e)=>{dispatch({type:'update',fld:"lastdate", val: e.target.value})}}    
//                                         required  /> 
//                         </Form.Group>
//                         <Form.Group>
                        
//                         <Form.Control className="mb-3" size = "lg" type="date" 
//                                         placeholder="lastdate_apply"  name="lastdate_apply" id="lastdate_apply" 
//                                         onChange={(e)=>{dispatch({type:'update',fld:"lastdate_apply", val: e.target.value})}}    
//                                         required  /> 
//                         </Form.Group>
//                         <Form.Group>
                        
//                         <Form.Control className="mb-3" size = "lg" type="text" placeholder="duration" name="duration" id="duration" 
//                          onChange={(e)=>{dispatch({type:'update',fld:"duration", val: e.target.value})}}  required />
//                         </Form.Group>
//                         <Form.Group>
                        
//                         <Form.Control className="mb-3" size = "lg" type="number" placeholder="availseats" name="availseats" id="availseats"
//                           onChange={(e)=>{dispatch({type:'update',fld:"availseats", val: e.target.value})}}  required/>
//                         </Form.Group>
//                         <fieldset disabled>
//                         <Form.Group>
                        
//                         <Form.Control className="mb-3" size = "lg" type="number" placeholder="" name="packageidobj" id="packageidobj" value={packageId}
//                           //onLoad={(e)=>{dispatch({type:'update',fld:"packageidobj", val:{empId} })}} 
//                           />
//                         </Form.Group>
//                         <Form.Group>
                        
//                         <Form.Control className="mb-3" size = "lg" type="number" placeholder="" name="employeeid" id="employeeid" value={empId}
//                          //value={empId} onLoad={(e)=>{dispatch({type:'update',fld:"employeeid", val:{empId} })}} 
//                           />
//                         </Form.Group>
//                         </fieldset>
                        
//             <Button variant="primary" type="submit"  onClick={(e)=>{sendData(e)}} >
//                Click here to Plan Tour
//             </Button>

//                     <button id="c-dispimgbtn">
//                 <Link to="/employee_home" id="c-dispimgbtn">Close</Link>
//             </button>
//           </Form>
//           </div>
//        </div>
//       );
// }