import { useReducer, useState } from 'react';
import '../CSS/Style.css';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';

export default function SignUpTouristComponent() {
    const init =
    {
        uid: { value: "", hasError: true, touched: false, error: "" },
        pwd: { value: "", hasError: true, touched: false, error: "" },
        fname: { value: "", hasError: true, touched: false, error: "" },
        lname: { value: "", hasError: true, touched: false, error: "" },
        email: { value: "", hasError: true, touched: false, error: "" },
        contact: { value: "", hasError: true, touched: false, error: "" },
        addressline: { value: "", hasError: true, touched: false, error: "" },
        district: { value: "", hasError: true, touched: false, error: "" },
        city: { value: "", hasError: true, touched: false, error: "" },
        postalcode: { value: "", hasError: true, touched: false, error: "" },
        state: { value: "", hasError: true, touched: false, error: "" },
        country: { value: "", hasError: true, touched: false, error: "" },
        bdate: { value: "", hasError: true, touched: false, error: "" },
        isFormValid: false
    }


    const validateData = (name, value) => {
        let hasError = false, error = "";
        switch (name) {
            case "uid":
                let regex = /^[A-Za-z0-9]{6,15}$/;
                if (!regex.test(value)) {
                    hasError = true;
                    error = "UserId Should be between 6 - 15 characters"
                }
                break;
            case "pwd":
                let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;

                if (!regex1.test(value)) {
                    hasError = true;
                    error = "Password Should be more than 5 characters and valid "
                }
                break;
            case "fname":
                let regex2 = /^[A-Za-z]{1,15}$/;

                if (!regex2.test(value)) {
                    hasError = true;
                    error = "First Name Should be valid and not more than 15 characters"
                }
                break;
            case "lname":
                let regex3 = /^[A-Za-z]{1,15}$/;

                if (!regex3.test(value)) {
                    hasError = true;
                    error = "Last Name Should be valid and not more than 15 characters"
                }
                break;
            // case "email":
            //     let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            //     if (!regex4.test(value)) {
            //         hasError = true;
            //         error = "Email should be valid"
            //     }
            //     break;
            case "email":
                let regex4 = /^[\w-\.]+@(gmail|yahoo|hotmail)\.com$/;

                if (!regex4.test(value)) {
                    hasError = true;
                    error = "Email should be valid and end with @gmail.com, @yahoo.com, or @hotmail.com"
                }
                break;
            case "contact":
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
                case "bdate":
                    var todaysdate=new Date();
                    var bdate=new Date(info.bdate.value)
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



        }
        return { hasError, error }

    }


    const reducer = (state, action) => {
        console.log(action);
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
    const navigate = useNavigate();

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
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                uid: info.uid.value,
                pwd: info.pwd.value,
                fname: info.fname.value,
                lname: info.lname.value,
                email: info.email.value,
                contact: info.contact.value,
                addressline: info.addressline.value,
                district: info.district.value,
                city: info.city.value,
                postalcode: info.postalcode.value,
                state: info.state.value,
                country: info.country.value,
                bdate :info.bdate.value
            })

        }
        fetch("http://localhost:8080/touristReg", reqOptions)
           // .then(resp => console.log(resp))
           //.then(data => setMsg(data))
           .then(resp => {if(resp.ok)
            { 
                alert("Registration Successful")
                navigate("/login")
              return resp.text();
            }
          else
            {
           
              throw  new Error("server error")  
            }
          })
    }

    const gotoHome = () =>
{
   navigate("/");

}



    return (
        <div className="c-signup">
              <NavbarComponent ></NavbarComponent>

                <Container fluid>
              
                    <Row>
                        <Col md={{ span: 4, offset: 5 }} xs={{ span: 10, offset: 1 }}>
                            <div className='c-signupform'>
                                <h1>Registration Form</h1>
                            </div>
                            <div>

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
                                                    <input type="text" placeholder="First Name" name="fname" id="fname" value={info.fname.value}
                                                        onChange={(e) => { onInputChange("fname", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("fname", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.fname.touched && info.fname.hasError ? "block" : "none", color: "red" }}> {info.fname.error} </p>
                                                </td>
                                            </tr>

                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Last Name" name="lname" id="lname" value={info.lname.value}
                                                        onChange={(e) => { onInputChange("lname", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("lname", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.lname.touched && info.lname.hasError ? "block" : "none", color: "red" }}> {info.lname.error} </p>
                                                </td>
                                            </tr>

                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Birth date" name="bdate" id="bdate" value={info.bdate.value}
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        onChange={(e) => { onInputChange("bdate", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("bdate", e.target.value, dispatch, e.target.type = "text") }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.bdate.touched && info.bdate.hasError ? "block" : "none", color: "red" }}> {info.bdate.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Email" name="email" id="email" value={info.email.value}
                                                        onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("email", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.email.touched && info.email.hasError ? "block" : "none", color: "red" }}> {info.email.error} </p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Contact" name="contact" id="contact" value={info.contact.value}
                                                        onChange={(e) => { onInputChange("contact", e.target.value, dispatch) }}
                                                        onBlur={(e) => { onFocusOut("contact", e.target.value, dispatch) }}
                                                        className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p style={{ display: info.contact.touched && info.contact.hasError ? "block" : "none", color: "red" }}> {info.contact.error} </p>
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
                                                        onBlur={(e) => { onFocusOut("postalcode", e.target.value, dispatch.e.target.type="text") }}
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
                                                <td >
                                                    <button type="submit" id="c-allbtn1" disabled={info.isFormValid ? false : true} onClick={(e) => { sendData(e) }}
                                                        className="btn  btn-block  ">Register</button>
                                                </td>
                                                <td>
                                                    <button type="reset" className="btn  btn-block" id="c-allbtn1" onClick={() => { dispatch({ type: 'reset' }) }}  >Reset</button>
                                                </td>
                                              
                                            </tr>
                                            <tr>
                                            <td colSpan={2}>
                                                <button  className="btn  btn-block" id="c-allbtn1" onClick={()=>gotoHome()} >Back to Home</button>

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