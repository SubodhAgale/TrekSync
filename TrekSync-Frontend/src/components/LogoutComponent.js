// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./slice";

export default function LogoutComponent()
{

    const navigate=useNavigate();


    useEffect(() => {
         
      localStorage.clear();
      //alert("Do you want to logout");
      // dispatch(logout())
      navigate("/");
      },[]);
    

}