import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/Style.css"
import NavbarComponent from "./NavbarComponent"

export default function ForgetPassword() {

  const [msg,setMsg] = useState("")

    const [userid, setUserid] = useState("");
    const navigate =useNavigate();

    const sendData = () => {
        console.log(userid);
        fetch("http://localhost:8080/forgotpassword?userid=" + userid)
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
              setMsg("You have enetered wrong uid");          
            }
            else
            {
              setMsg("");  
              alert("Please check your registered mail");
              navigate("/login");
              
            }
          })
         
      }


        return(

            <div> <NavbarComponent></NavbarComponent>
                   <div className='c-forgetpwddiv'>   
                        <form>
                            <h5>Forgot Password</h5>
                            <input type="text" name="uid" id="uid" placeholder='UserIsd'  onChange={(e) => {setUserid(e.target.value)}}></input>
                            <button type="button" id="c-forgetbtn" onClick={(e)=>{sendData(e)}}  >submit</button> 
                        </form>
                        
                        <p className='msg'>{msg}</p>
                </div>  
               
                

            </div>
        )



}