import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function TouristHome() {

    // here saving info of logged tourist
const [tourist , setTourist] = useState(null);

useEffect( ()=>
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

} ,[]
)

    return (
        <div>

            <div >

                <nav className="navbar navbar-expand-sm mb-3 c-navcolor">
                    <div className="container-fluid ">

                        <div className="c-webname">
                            Take A Tour
                        </div>

                        <ul className="navbar-nav navbar-right ">

                            <li className="nav-item ">
                                <Link to="home" className="c-navlink px-3">Home</Link>
                            </li>
                   
                            

                        </ul>
                    </div>

                </nav>
            </div>
            <h1>
                Tourist Home
            </h1>
            <h1>welcome {tourist.t_fname}</h1>
            <h1>Welcome {tourist && tourist.t_fname} {tourist && tourist.t_lname}</h1> 
            <Outlet/>




        </div>

    )
}