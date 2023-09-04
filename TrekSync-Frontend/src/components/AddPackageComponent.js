import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "../CSS/Style.css"

export default function AddPackageComponent() {

  const init = {
    "packagename": "",
    "tourist_capacity": 0,
    "description": "",
    "locations": "",
    "boardinglocation":"",
    "duration":""
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;
    }

  }
  const [info, dispatch] = useReducer(reducer, init);

  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [pacid, setPackageid] = useState(0);

  //    const sendData = (e)=>
  //    {
  //      e.preventDefault();
  //      const reqOptions = {
  //         method : 'POST',
  //         headers : {'content-type':'application/json'},
  //         body : JSON.stringify(info)
  //      }
  //      fetch("http://localhost:8080/addPackage",reqOptions)
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
  //         const fd = new FormData();
  //         fd.append("file", file);
  //        const reqOptions1 =
  //        {
  //            method: 'POST',
  //            //headers: { 'Content-Type': 'multipart/form-data' },
  //            body: fd
  //        }
  //        // to check image is uploaded or not , package_id sending as path variable
  //        fetch("http://localhost:8080/uploadimageandpid/"+obj.package_id, reqOptions1)
  //            // .then(resp=>console.log(resp))
  //            .then(resp => resp.json())
  //            .then(obj => {
  //                if (obj) {
  //                    alert("successfully added package");
  //                    navigate("/employee_home");
  //                }
  //                else {
  //                    alert("successfully added package but image uploading failure, try again");
  //                    navigate("/employee_home");
  //                }
  //            })

  //      })     
  //  .catch((error) =>  alert("server error try after some time"));
  // }  


  const sendDatapack = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    }
    fetch("http://localhost:8080/addPackage", reqOptions)
      .then(resp => {
        if (resp.ok) {
          return resp.text();
        }
        else {

          throw new Error("server error")
        }
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (obj) {
          setPackageid(obj.package_id);

          alert("successfully added package");
        }
        else {
          alert(" failure, try again");
        }
      })
      .catch((error) => alert("server error try after some time"));
  }

  const sendDataimg = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("file", file);
    const reqOptions1 =
    {
      method: 'POST',
      //headers: { 'Content-Type': 'multipart/form-data' },
      body: fd
    }
    // to check image is uploaded or not , package_id sending as path variable
    fetch("http://localhost:8080/uploadimageandpid/" + pacid, reqOptions1)
      // .then(resp=>console.log(resp))
      .then(resp => resp.json())
      .then(obj => {
        if (obj) {
          alert("successfully added packageimage");
         
        }
        else {
          alert("image uploading failure, try again");
         
        }
      })

  }

   var imgbtn = 0;
   var formbtn = 0;
  if(file != null  && pacid != 0)
  {
    imgbtn=1;
    console.log("image not selected");
  }
 
  if(info.packagename != "" && info.tourist_capacity > 0 && info.description !="" &&  info.locations !="" && info.boardinglocation !="")
  {
    formbtn=1;
    console.log("packagename not selected");
  }
    


  return (
    <div >
      <div>
        <h3><b>Add new Package</b></h3>
      </div><br></br>
      <div class="d-flex justify-content-around">
        <Form>

          <Form.Group>

            <Form.Control className="mb-3" size="lg" type="text"
              placeholder="packagename" name="packagename" id="packagename"
              onChange={(e) => { dispatch({ type: 'update', fld: "packagename", val: e.target.value }) }} required />
          </Form.Group>
        
          <Form.Group>

          

            <Form.Control className="mb-3" size="lg" type="number" placeholder="tourist_capacity" name="tourist_capacity" id="tourist_capacity"
              onChange={(e) => { dispatch({ type: 'update', fld: "tourist_capacity", val: e.target.value }) }} required />
          </Form.Group>

          <Form.Group>
            
            <Form.Control className="mb-3" size = "lg" type="text" placeholder="duration" name="duration" id="duration" 
                onChange={(e) => { dispatch({ type: 'update', fld: "duration", val: e.target.value }) }}            
                            required />
            </Form.Group>

              <Form.Group>
            <Form.Control className="mb-3" size="lg" type="text" placeholder="description" name="description" id="description"
              onChange={(e) => { dispatch({ type: 'update', fld: "description", val: e.target.value }) }} required />
          </Form.Group>

          <Form.Group>

            <Form.Control className="mb-3" size="lg" type="text" placeholder="locations" name="locations" id="locations"
              onChange={(e) => { dispatch({ type: 'update', fld: "locations", val: e.target.value.toLocaleLowerCase() }) }} required />
          </Form.Group>

          <Form.Group>

          <Form.Control className="mb-3" size="lg" type="text" placeholder="boardinglocation" name="boardinglocation" id="locboardinglocationations"
              onChange={(e) => { dispatch({ type: 'update', fld: "boardinglocation", val: e.target.value.toLocaleLowerCase() }) }} required />
          </Form.Group>





          <Button variant="primary" type="submit" onClick={(e) => { sendDatapack(e) }} disabled={ formbtn ? false : true}>
            Click here to Add Package
          </Button>
        </Form>

        <Form>
          <Form.Group>

            <Form.Control className="mb-3" size="lg" type="file" placeholder="packageimages" name="packageimages" id="packageimage"
              onChange={(e) => { setFile(e.target.files[0]) }}  required />
          </Form.Group>


          <Button variant="primary" type="submit" onClick={(e) => { sendDataimg(e) }}  disabled={ imgbtn ? false : true}>
            Click here to Add Package
          </Button>

        </Form>
      </div>

      {/* <button id="c-dispimgbtn">
        <Link to="/employee_home" id="c-dispimgbtn">Close</Link>
      </button> */}

    </div>
  );




}