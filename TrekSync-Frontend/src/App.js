import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import AdminHome from './components/AdminHome';
import TouristHome from './components/TouristHome';
import EmployeeHome from './components/EmployeeHome';
import HomeComponent from './components/HomeComponent';
import SignUpTouristComponent from './components/SignUpTouristComponent';
import { useSelector } from 'react-redux';
import LogoutComponent from './components/LogoutComponent';
import AddEmployee from './components/AddEmployeeComponent';
import AddPackageComponent from './components/AddPackageComponent';
import Slideshow from './components/slideshowcomp';
import PlanTourComponent from './components/PlanTourComponent';
import { useEffect, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import ForgetPassword from './components/ForgetPasswordComponent';
import BookTour from './components/BookTourComponent';
import ApprovePlanTour from './components/ApprovalPlanTourComponent';
import Profile from './components/ProfileComponent';
import Image from './Images/lonavala.jpg' 

function App() {


  // useEffect(() => {
  //   var loggedInUser = localStorage.getItem("loggedstatus");
  //   console.log("logged status in app"+loggedInUser)
  //   if (loggedInUser==null) {
  //       localStorage.setItem("loggedstatus",false)    
  //   }
  // }, []);
  // initialstate of logged slice
  // const mystate = useSelector((state) => state.logged);
  // console.log(mystate);

  
  // const[active,setActive]=useState();

      // console.log("logged status "+loggedst)
      // useEffect(() => {

      //   b = localStorage.getItem("loggedstatus");

      // },);

      // var b = localStorage.getItem("loggedstatus");
      // console.log("....logged status "+b)

      // if (b==null) {
      //   b=0;
      //   localStorage.setItem("loggedstatus",0)    
      //  }
  
 

  return (

    <div className="App">

        {/* <NavbarComponent name= {b}></NavbarComponent>    */}


      <div >

        {/* <nav className="navbar navbar-expand-sm mb-3 c-navcolor">
          <div className="container-fluid ">  
            <div className="c-webname">
              Take A Tour
            </div>
            <ul className="navbar-nav navbar-right ">
              <li className="nav-item ">
                <Link to="/" className="c-navlink px-3">Home</Link>
              </li>
            
              <li className="nav-item" style={{ display : b ? "block" : "none" }}>
                    <Link to="signup" className="c-navlink px-3">Sign Up</Link>
                  </li>
    
                  <li className="nav-item" style={{ display : b ? "block" : "none" }}>
                    <Link to="login" className="c-navlink px-3">Login</Link>
                  </li>
                  <li className="nav-item " style={{ display : b ? "none" : "block" }}>
                                <Link to="profile" className="c-navlink px-3">welcome </Link>
                                {tourist && tourist.t_fname}
                  </li>
                            <li className="nav-item " style={{ display : b ? "none" : "block" }}>
                                <Link to="/logout" className="c-navlink px-3">Logout</Link>
                            </li>
            </ul>
          </div>
        </nav> */}
      </div>

      <div >
        <Routes>
          <Route path="/" element={<HomeComponent name={0}/>}> </Route>
              <Route path="/logout" element={<LogoutComponent/>}></Route>
         
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/forget" element={<ForgetPassword/>}></Route>
          <Route path="/booktour" element={<BookTour/>}></Route> 
          <Route path="/profile" element={<Profile/>}></Route> 
         

          <Route path="/admin_home" element={<AdminHome />}>
                <Route path="home" element={<HomeComponent />}></Route>
                <Route path="addaccemp" element={<AddEmployee />}></Route>
                <Route path="approval" element={<ApprovePlanTour />}></Route>

                <Route path="logout" element={<LogoutComponent/>}></Route>
          </Route>
          

          {/* <Route path="/tourist_home" element={<TouristHome />}>
                 <Route path="" element={<HomeComponent />}></Route>
                 <Route path="" element={<HomeComponent />}></Route>
                 <Route path="logout" element={<LogoutComponent/>}></Route>
          </Route> */}

          <Route path="/employee_home" element={<EmployeeHome />}>
                <Route path="plantour" element={<PlanTourComponent/>}></Route>
               <Route path="addpackage" element={<AddPackageComponent/>}></Route>
               <Route path="logout" element={<LogoutComponent/>}></Route>

          </Route>


          <Route path="/signup" element={<SignUpTouristComponent />}></Route>
          

        </Routes>
      </div>
    
      
    </div>
  );
}

export default App;