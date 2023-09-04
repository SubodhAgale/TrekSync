import { useEffect, useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import "../CSS/Style.css"
import DisplayPackageForEmp from './DisplayPackageForEmpComponent';
import { Row,Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import logo1 from "../Images/airplane.png";

export default function EmployeeHome() {
    // here saving info of logged tourist
    const [employee, setEmployee] = useState(null);
    // const mystate = useSelector((state) => state.logged);
    // console.log(mystate);

    useEffect(() => {

        // saving in login component , and fetch here
        const loginid = JSON.parse(localStorage.getItem("loggedinfo")).login_id;
        console.log("loginid : " + loginid);

        fetch("http://localhost:8080/employeegetbyid?eid=" + loginid)
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
                console.log(JSON.stringify(obj))
                 localStorage.setItem("loggedemployee", JSON.stringify(obj))
                 localStorage.setItem("EmployeeId",obj.employee_id)
                // localStorage.setItem("loggedemployee",obj)
                setEmployee(obj);

            })

    }, [])

    const loggedst = (localStorage.getItem('loggedstatus'));
    console.log("logged status "+loggedst)
    return (
        <div>
           
            <div style={{ display: loggedst ? "block" : "none" }}>
                <nav className="navbar navbar-expand-sm mb-3 c-empnavcolor">
                    <div className="container-fluid ">

                        <div className="c-webname">
                        <img src={logo1} height="40px" width="40px"></img>&ensp;
                            TrekSync
                        </div>

                        <ul className="navbar-nav navbar-right ">

                            <li className="nav-item">
                                <Link to="/employee_home" className="c-navlink px-3">Employee-home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="addpackage" className="c-navlink px-3">Add Package</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="plantour" className="c-navlink px-3">Plan Tour</Link>
                            </li> */}

                           
                            <li className="nav-item ">
                                <Link to="logout" className="c-navlink px-3">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <h1>
                Employee Home
            </h1> */}
          
          <Container fluid>
            <Row>
                <Col md={{span : 2, offset : 10}}>
                    
                    <div className='c-empwelcomeheading'>
                        <h5>Welcome</h5>
                        <h5>{employee && employee.e_fname} {employee && employee.e_lname}</h5>
                        <img src={`data:image/jpeg;base64,${employee && employee.e_photo}`} width="100" height="100" className='c-empaccphoto' />
                    </div>
                </Col>
            </Row>
            <Outlet />
            <Row>
                <Col>
                <DisplayPackageForEmp></DisplayPackageForEmp>
                </Col>
                
            </Row>
            </Container>
         
            
           
         
        </div>

    )
}