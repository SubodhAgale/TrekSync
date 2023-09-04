import { useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import emp from "../Images/emp3.jpg"
import { useNavigate } from "react-router-dom";
import '../CSS/Style.css';
import emp2 from "../Images/emp2.png"


export default function AddEmployee() {


    const navigate = useNavigate();
    const init =
    {
        uid: { value: "", hasError: true, touched: false, error: "" },
        pwd: { value: "", hasError: true, touched: false, error: "" },
        e_bdate: { value: "", hasError: true, touched: false, error: "" },
        e_fname: { value: "", hasError: true, touched: false, error: "" },
        e_mname: { value: "", hasError: true, touched: false, error: "" },
        e_lname: { value: "", hasError: true, touched: false, error: "" },
        e_gender: { value: "", hasError: true, touched: false, error: "" },
        e_hiredate: { value: "", hasError: true, touched: false, error: "" },
        e_designation: { value: "", hasError: true, touched: false, error: "" },
        e_contact: { value: "", hasError: true, touched: false, error: "" },
        e_adharno: { value: "", hasError: true, touched: false, error: "" },
        e_email: { value: "", hasError: true, touched: false, error: "" },
        addressline: { value: "", hasError: true, touched: false, error: "" },
        district: { value: "", hasError: true, touched: false, error: "" },
        city: { value: "", hasError: true, touched: false, error: "" },
        postalcode: { value: "", hasError: true, touched: false, error: "" },
        state: { value: "", hasError: true, touched: false, error: "" },
        country: { value: "", hasError: true, touched: false, error: "" },
        isFormValid: false
    }


    const validateData = (name, value) => {
        let hasError = false, error = "";
        switch (name) {
            case "e_adharno":
                let regex14 = /^[0-9]{12}$/;

                if (!regex14.test(value)) {
                    hasError = true;
                    error = "Aadhar no Should be of 12 digits Only"
                }
                break;

            case "e_designation":
                let regex13 = /^[A-Za-z\s]{1,15}$/;
                if (!regex13.test(value)) {
                    hasError = true;
                    error = "Designation Should be between 6 - 15 characters"
                }
                break;
            case "uid":
                let regex = /^[A-Za-z0-9]{6,15}$/;
                if (!regex.test(value)) {
                    hasError = true;
                    error = "Uid Should be between 6 - 15 characters"
                }
                break;
            case "pwd":
                let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;

                if (!regex1.test(value)) {
                    hasError = true;
                    error = "Password Should be more than 5 characters and valid "
                }
                break;
            case "e_fname":
                let regex2 = /^[A-Za-z]{1,15}$/;

                if (!regex2.test(value)) {
                    hasError = true;
                    error = "First Name Should be valid and not more than 15 characters"
                }
                break;
            case "e_mname":
                let regex12 = /^[A-Za-z]{1,15}$/;

                if (!regex12.test(value)) {
                    hasError = true;
                    error = "Middle Name Should be valid and not more than 15 characters"
                }
                break;
            case "e_lname":
                let regex3 = /^[A-Za-z]{1,15}$/;

                if (!regex3.test(value)) {
                    hasError = true;
                    error = "Last Name Should be valid and not more than 15 characters"
                }
                break;
            case "e_email":
                let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                if (!regex4.test(value)) {
                    hasError = true;
                    error = "Email should be valid"
                }
                break;
            case "e_contact":
                let regex5 = /^[0-9]{10}$/;

                if (!regex5.test(value)) {
                    hasError = true;
                    error = "Contact Should be of 10 digits Only"
                }
                break;
            case "addressline":
                let regex6 = /^[A-Za-z0-9'\.\-\s\,]{1,200}$/;

                if (!regex6.test(value)) {
                    hasError = true;
                    error = "Address should be valid"
                }
                break;
            case "district":
                let regex7 = /^[A-Za-z]{1,}$/;

                if (!regex7.test(value)) {
                    hasError = true;
                    error = "Enter valid district"
                }
                break;
            case "city":
                let regex8 = /^[A-Za-z]{1,}$/;

                if (!regex8.test(value)) {
                    hasError = true;
                    error = "Enter valid city"
                }
                break;
            case "postalcode":
                let regex9 = /^[0-9]{6}$/;

                if (!regex9.test(value)) {
                    hasError = true;
                    error = "Enter valid postalcode"
                }
                break;
            case "state":
                let regex10 = /^[A-Za-z\s]{1,}$/;

                if (!regex10.test(value)) {
                    hasError = true;
                    error = "Enter valid State "
                }
                break;
            case "country":
                let regex11 = /^[A-Za-z\s]{1,}$/;

                if (!regex11.test(value)) {
                    hasError = true;
                    error = "Enter valid Country name"
                }
                break;
                case "e_bdate":
                     var todaysdate=new Date();
                     var bdate=new Date(info.e_bdate.value)
                    var year1=todaysdate.getFullYear();
                    var birthyear=bdate.getFullYear();
                     var age=(year1-birthyear);
                     console.log(age )
                    if (age<18) 
                    {
                        hasError = true;
                        error = "Age Should be greater than 18"
                    }
                    break;
             case "e_hiredate":
                var todaysdate1=new Date();
                var hiredate=new Date(info.e_hiredate.value)
               if (hiredate>todaysdate1) 
               {
                   hasError = true;
                   error = "Hiredate Should be valid"
               }
               break;



        }
        return { hasError, error }

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


    //    const PostValidData = () => {

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const [file, setFile] = useState();

    //on change event
    const onInputChange = (name, value, dispatch) => {
        //validation logic
        const { hasError, error } = validateData(name, value); //form field, latest value

        //which key to be modified - value, hasError, error, touched 
        let isFormValid = true;
        for (const key in info) {
            let item = info[key];
            /*if(key === name && hasError)
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


    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: info.uid.value,
                pwd: info.pwd.value,
                e_bdate: info.e_bdate.value,
                e_fname: info.e_fname.value,
                e_mname: info.e_mname.value,
                e_lname: info.e_lname.value,
                e_gender: info.e_gender.value,
                e_hiredate: info.e_hiredate.value,
                e_designation: info.e_designation.value,
                e_email: info.e_email.value,
                e_contact: info.e_contact.value,
                e_adharno: info.e_adharno.value,
                addressline: info.addressline.value,
                district: info.district.value,
                city: info.city.value,
                postalcode: info.postalcode.value,
                state: info.state.value,
                country: info.country.value
            })

        }
        fetch("http://localhost:8080/empReg", reqOptions)
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
                const fd = new FormData();
                 fd.append("file", file);
                const reqOptions1 =
                {
                    method: 'POST',
                    //headers: { 'Content-Type': 'multipart/form-data' },
                    body: fd
                }
               
                // to check image is uploaded or not , employee_id sending as path variable
                fetch("http://localhost:8080/uploadimageemp/"+obj.employee_id, reqOptions1)
                    // .then(resp=>console.log(resp))
                    .then(resp => resp.json())
                    .then(obj => {
                        if (obj) {
                            alert("Reg successful.");
                            navigate("/admin_home");
                           
                        }
                        else {
                            alert("Reg successful. but image uploading failure, try again");
                            navigate("/admin_home");
                        }
                    })


            })

            .catch((error) => alert("server error try after some time"));
        //.then(data => setMsg(data))
    }



    return (
        <div className="c-signupemp">
          
                <Container>

                    <Row>
                    
                        <Col md={{ span: 3 ,offset : 1 }} >
                            <div className="c-addempheading">
                                <h4>Employee Registration</h4>
                                <img src={emp2} className="c-addempimgicon"></img>

                            </div>
                        </Col>
                        <Col md={{ span: 4 }} xs={{ span: 10, offset: 1 }}>

                            <div className="c-addempregform">

                                {/* <div className="d-flex justify-content-center table-responsive-md"> */}
                                <form >
                                    <div className="form-group">
                                        <table className="table table-md c-table" >
                                            <tr >


                                                <td colSpan={2}>

                                                    <input type="text" placeholder="user id" name="uid" id="uid" value={info.uid.value}
                                                        onChange={(e) => { onInputChange("uid", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("uid", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.uid.touched && info.uid.hasError ? "block" : "none", color: "red" }}> {info.uid.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="password" placeholder="Password" name="pwd" id="pwd" value={info.pwd.value}
                                                        onChange={(e) => { onInputChange("pwd", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("pwd", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm"
                                                    />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.pwd.touched && info.pwd.hasError ? "block" : "none", color: "red" }}> {info.pwd.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="First Name" name="e_fname" id="e_fname" value={info.e_fname.value}
                                                        onChange={(e) => { onInputChange("e_fname", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_fname", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_fname.touched && info.e_fname.hasError ? "block" : "none", color: "red" }}> {info.e_fname.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Middle Name" name="e_mname" id="e_mname" value={info.e_mname.value}
                                                        onChange={(e) => { onInputChange("e_mname", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_mname", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_mname.touched && info.e_mname.hasError ? "block" : "none", color: "red" }}> {info.e_mname.error} </p>
                                                </td>
                                            </tr>

                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Last Name" name="e_lname" id="e_lname" value={info.e_lname.value}
                                                        onChange={(e) => { onInputChange("e_lname", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_lname", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_lname.touched && info.e_lname.hasError ? "block" : "none", color: "red" }}> {info.e_lname.error} </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <label className="form-check-label">Select Gender</label>
                                                </td>

                                                <td >
                                                    <input type="radio" name="e_gender" id="female" value="F" className="form-check-input"
                                                        onChange={(e) => { onInputChange("e_gender", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_gender", e.target.value, dispatch) }} />
                                                    <label for="Female" className="form-check-label">Female</label>
                                                    <br></br>
                                                    <input type="radio" name="e_gender" id="male" value="M" className="form-check-input"
                                                        onChange={(e) => { onInputChange("e_gender", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_gender", e.target.value, dispatch) }} />
                                                    <label for="male" className="form-check-label">Male  </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_gender.touched && info.e_gender.hasError ? "block" : "none", color: "red" }}> {info.e_gender.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Birth date" name="e_bdate" id="e_bdate" value={info.e_bdate.value}
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        onChange={(e) => { onInputChange("e_bdate", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_bdate", e.target.value, dispatch, e.target.type = "text") }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_bdate.touched && info.e_bdate.hasError ? "block" : "none", color: "red" }}> {info.e_bdate.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Hire date" name="e_hiredate" id="e_hiredate" value={info.e_hiredate.value}
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        onChange={(e) => { onInputChange("e_hiredate", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_hiredate", e.target.value, dispatch, e.target.type = "text") }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_hiredate.touched && info.e_hiredate.hasError ? "block" : "none", color: "red" }}> {info.e_hiredate.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Designation" name="e_designation" id="e_designation" value={info.e_designation.value}
                                                        onChange={(e) => { onInputChange("e_designation", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_designation", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_designation.touched && info.e_designation.hasError ? "block" : "none", color: "red" }}> {info.e_designation.error} </p>
                                                </td>
                                            </tr>



                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Adhar Number" name="e_adharno" id="e_adharno" value={info.e_adharno.value}
                                                        onChange={(e) => { onInputChange("e_adharno", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_adharno", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_adharno.touched && info.e_adharno.hasError ? "block" : "none", color: "red" }}> {info.e_adharno.error} </p>
                                                </td>
                                            </tr>

                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Email" name="e_email" id="e_email" value={info.e_email.value}
                                                        onChange={(e) => { onInputChange("e_email", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_email", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_email.touched && info.e_email.hasError ? "block" : "none", color: "red" }}> {info.e_email.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Contact" name="e_contact" id="e_contact" value={info.e_contact.value}
                                                        onChange={(e) => { onInputChange("e_contact", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("e_contact", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.e_contact.touched && info.e_contact.hasError ? "block" : "none", color: "red" }}> {info.e_contact.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Address Line 1" name="addressline" id="addressline" value={info.addressline.value}
                                                        onChange={(e) => { onInputChange("addressline", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("addressline", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.addressline.touched && info.addressline.hasError ? "block" : "none", color: "red" }}> {info.addressline.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="District" name="district" id="district" value={info.district.value}
                                                        onChange={(e) => { onInputChange("district", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("district", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.district.touched && info.district.hasError ? "block" : "none", color: "red" }}> {info.district.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="City" name="city" id="city" value={info.city.value}
                                                        onChange={(e) => { onInputChange("city", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("city", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.city.touched && info.city.hasError ? "block" : "none", color: "red" }}> {info.city.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Postal Code" name="postalcode" id="postalcode" value={info.postalcode.value}
                                                        onFocus={(e) => (e.target.type = "number")}
                                                        onChange={(e) => { onInputChange("postalcode", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("postalcode", e.target.value, dispatch, e.target.type = "text") }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.postalcode.touched && info.postalcode.hasError ? "block" : "none", color: "red" }}> {info.postalcode.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="State" name="state" id="state" value={info.state.value}
                                                        onChange={(e) => { onInputChange("state", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("state", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.state.touched && info.state.hasError ? "block" : "none", color: "red" }}> {info.state.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Country" name="country" id="country" value={info.country.value}
                                                        onChange={(e) => { onInputChange("country", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("country", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.country.touched && info.country.hasError ? "block" : "none", color: "red" }}> {info.country.error} </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <input type="file" id="e_photo" name="e_photo"
                                                     onChange={(e) => { setFile(e.target.files[0]) }}
                                                     onBlur={(e) => { setFile(e.target.files[0]) }}
                                                     />
                                                </td>
                                            </tr>


                                            <tr>
                                                <td >
                                                    <button type="submit" id="c-allbtn1" disabled={info.isFormValid ? false : true} onClick={(e) => { sendData(e) }}
                                                        className="btn  btn-block  ">Register</button>
                                                </td>
                                                <td>
                                                    <button type="reset" className="btn  btn-block  " id="c-allbtn1" onClick={() => { dispatch({ type: 'reset' }) }}  >Reset</button>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </form>
                            </div>
                            {/* <p>{JSON.stringify(info)}</p> */}

                            {/* </div> */}
                        </Col>

                    </Row>
                 
                </Container>
            
        </div>
    )
}
