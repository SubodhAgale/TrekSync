import CarouselFadeExample from "./CarouselComponent"
import "../CSS/HomeStyle.css"
import FooterComponent from "./FooterComponent"
import SearchingPackage from "./SearchingPackageComponent"
import NavbarComponent from "./NavbarComponent"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"


export default function HomeComponent(props)
{


       // here saving info of logged tourist

    //     useEffect(() => 
    //     {

    //     console.log("logged status in home use")
        
    //   }, [b]);

//     useEffect(() => 
//     {
//     var loggedInUser = localStorage.getItem("loggedstatus");

//     console.log("logged status in app"+loggedInUser)
//     if (loggedInUser==null) {
//         localStorage.setItem("loggedstatus",false)    
//     }
//   }, []);
    
//     var b = localStorage.getItem("loggedstatus");
//     console.log("....logged status "+b)

//     if (b==null) {
//       b=0;
//       localStorage.setItem("loggedstatus",0)    
//      }


// var b=props.name;

// if(b==1)
// {
//     console.log("in if"+b)
//      var a = localStorage.getItem("loggedstatus");
//     var b=parseInt(a);
// }

    return(
        <div>
            <NavbarComponent ></NavbarComponent>     
        <div className="c-renderelement">
        
            <CarouselFadeExample/>
             <SearchingPackage/>
             <FooterComponent/> 
        </div>
        <Outlet></Outlet>

        </div>
    )
}