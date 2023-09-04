import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../Images/airplane.png";

export default function NavbarComponent() 
{
  
   
    const bb = localStorage.getItem("loggedstatus");
    console.log("logged status starting code "+bb)
    if (bb==null)
     {
     var b=0;
      localStorage.setItem("loggedstatus",0)    
      }
      else{
        b=parseInt(bb);
      }
    // setActive(b)
    console.log("logged status after if code "+b)
    const [tourist , setTourist] = useState(null);




    useEffect(() => {
         
      console.log("logged status after if  effect "+b)

    
   if(b==1)
   {
    // saving in login component , and fetch here
    const loginid = JSON.parse(localStorage.getItem("loggedinfo")).login_id;
    console.log("loginid : "+ loginid);

    fetch("http://localhost:8080/touristgetbyid?tid="+loginid)
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
    .then(obj =>  {
        console.log(JSON.stringify(obj))
        localStorage.setItem("loggedtourist",JSON.stringify(obj))
        setTourist(obj);
    })
  }


      },[b]);



    




      return (

        <div >
          {/* <h1 className="bg-primary text-white">welcome to world</h1> */}
    
          <div >
             {console.log("in nav")}
            <nav className="navbar navbar-expand-sm mb-3 c-navcolor" >
              <div className="container-fluid ">  
    
                <div className="c-webname">
                  <img src={logo1} height="40px" width="40px"></img>&ensp;
                  TrekSync
                </div>
    
                <ul className="navbar-nav navbar-right ">
                  <li className="nav-item ">
                    <Link to="/" className="c-navlink px-3">Home</Link>
                  </li>
    
                  <li className="nav-item" style={{ display : b ? "none" : "block" }}>
                    <Link to="/signup" className="c-navlink px-3">Sign Up</Link>
                  </li>
    
                  <li className="nav-item" style={{ display : b ? "none" : "block" }}>
                    <Link to="/login" className="c-navlink px-3">Login</Link>
                  </li>
                  
                  <li className="nav-item " style={{ display : b ? "block" : "none" }}>
                    <Link to="/profile" className="c-navlink px-3">welcome  {tourist && tourist.t_fname}</Link>
                   </li>
                            <li className="nav-item " style={{ display : b ? "block" : "none" }}>
                                <Link to="/logout" className="c-navlink px-3">Logout</Link>
                            </li>
                </ul>
              </div>
    
            </nav>
          </div>
          </div>
      )
}