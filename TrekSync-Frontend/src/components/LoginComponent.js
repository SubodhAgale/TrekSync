import { useReducer,useState } from 'react';
import { useDispatch } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import { login } from './slice';
import {BiHide} from "react-icons/bi"
import '../CSS/loginstyle.css';
import NavbarComponent from './NavbarComponent';

export default function LoginComponent() 
{


   const init = {
    uid: "",
    pwd: ""
   }

   const reducer = (state,action) => {
    switch(action.type)
    {
        case 'update':
             return {...state ,[action.fld]:action.val}
        case 'reset':
             return init;
    }

   }
   const [info,dispatch] =useReducer(reducer,init);
   const [msg,setMsg] = useState("")
   const navigate = useNavigate();
  //  const reduxaction = useDispatch();

   const sendData = (e)=>
   {
     e.preventDefault();
     const reqOptions = {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify(info)
     }
     fetch("http://localhost:8080/chkLogin",reqOptions)
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
     .then(obj => {

              if(Object.keys(obj).length===0)
              {
                setMsg("wrong uid and password")
              }
              else
              {
                 // reduxaction(login(true))
                  localStorage.setItem("loggedstatus",1)
                  
                  // to keep info in key valye pair to use in session
                  localStorage.setItem("loggedinfo",JSON.stringify(obj))
                  console.log(JSON.stringify(obj));

                 if(obj.status === 0)
                 {
                   alert("Request has not been approved")
                 }
                  else
                  {


                    // console.log("in else")
                    if(obj.role_id.role_id===2)
                    {
                      navigate("/admin_home")
                    }
                    else if(obj.role_id.role_id===1)
                    {
                      navigate("/")
                      
                    }
                    else if(obj.role_id.role_id===3)
                    {
                      navigate("/employee_home")
                    }
                    
                  }
              }
     })

     .catch((error) =>  alert("server error try after some time"));
   }


   var a = 0;
    const Moving = (e) => {
        
    if ((info.uid == "" || info.pwd == "") && a == 0)
    {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    if ((info.uid == "" || info.pwd == "") && a == 1)
    {
        buttonMoveRight();
        a = 2;
        return false;
    }

    if ((info.uid == "" || info.pwd == "") && a == 2)
    {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    else
    {
        const but = e.target;
        but.style.cursor = 'pointer';
        but.style.backgroundColor = 'purple';
        return false;
    };

}

const buttonMoveLeft = () =>
{
    const button = document.getElementById('btn');
    button.style.transform = 'translateX(-205px)';

}
      

const buttonMoveRight = () =>
{
    const button = document.getElementById('btn');
    button.style.transform = 'translateX(0%)';

}

const resetBtn = () =>
{
    const button = document.getElementById('btn');
    button.style.transform = 'translateX(0%)';

}
 
const gotoforget = () =>
{
   navigate("/forget");

}

const gotoHome = () =>
{
   navigate("/");

}
const [passwordType, setPasswordType] = useState("password");

const togglePassword =()=>{
  if(passwordType==="password")
  {
   setPasswordType("text")
   return;
  }
  setPasswordType("password")
}
    return (
      <div className='c-loginbox'>

        <NavbarComponent ></NavbarComponent>
        <h1>  Login Form </h1>

        <div className="login">
        <form  name="suform" id="supform" > 
            <input type="text" placeholder="user id" name ="uid" id="uid" value={info.uid}
             onChange={(e)=>{dispatch({type:'update',fld:"uid", val: e.target.value})}}  />
             <div id="" className="form-text">Enter User ID</div>

            <input type={passwordType } class="form-control" placeholder="password" name="pwd" id="pwd"  value={info.pwd} 
            onChange={(e)=>{dispatch({type:'update',fld:"pwd", val:e.target.value})}}  />
            <div id="" className="form-text">Enter Password</div>
            <button className="btn btn-outline-primary" type="button" onClick={togglePassword}><BiHide></BiHide>
            </button>
            <p className='msg'>{msg}</p>
            <button type="submit" id="btn"  onClick={(e)=>{sendData(e)}} 
            onMouseOver={(e)=>{Moving(e)}} >Login</button> 

             {/* <input type="reset"  id = "btn" onClick={()=>{dispatch({type:'reset'})}}  /> */}
        </form>
        {/* <p> {JSON.stringify(info)}</p> */}   
       
    </div >
    <div className="c-forgethomebtndiv">
    <button  className="c-forgetbtn" onClick={()=>gotoforget()} >Forget Password</button>
    <button  className="c-forgetbtn" onClick={()=>gotoHome()} >Back to home</button>

    </div>
     </div>
    
     
     
    )
}