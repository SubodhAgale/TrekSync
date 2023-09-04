
import { Row,Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/HomeStyle.css";
import ApprovePlanTour from "./ApprovalPlanTourComponent";
import { useSelector } from 'react-redux';
import NavbarComponent from "./NavbarComponent";
import logo1 from "../Images/airplane.png";

export default function AdminHome() {

    const loggedst = (localStorage.getItem('loggedstatus'));
    console.log("logged status "+loggedst)

//     const mystate = useSelector((state) => state.logged);
//   console.log(mystate);
    return (
        <div>
            <Container fluid >
          <Row>
          {/* <NavbarComponent ></NavbarComponent> */}
            <nav className="navbar navbar-expand-sm mb-3 c-navcolor" style={{ display: loggedst ? "block" : "none" }}>
                <div className="container-fluid ">

                    <div className="c-webname">
                    <img src={logo1} height="40px" width="40px"></img>&ensp;
                        Take A Tour
                    </div>

                    <ul className="navbar-nav navbar-right ">

                        <li className="nav-item ">
                            <Link to="/admin_home" className="c-navlink px-3">Admin-Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="addaccemp" className="c-navlink px-3">Add Employee</Link>
                        </li>
                     
                        <li className="nav-item ">
                            <Link to="approval" className="c-navlink px-3">Approval Request</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="logout" className="c-navlink px-3">Logout</Link>
                        </li>


                    </ul>
                </div>

            </nav>
            <Col md={{span: 4 , offset : 4}} >
            <h2 >
               
            </h2>
            </Col>
            </Row>
            </Container>
            {/* < ApprovePlanTour/> */}
            <Outlet />  
          

        </div>

    )
}