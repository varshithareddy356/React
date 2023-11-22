import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Register() {
 
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [emailerror,setemailerror]=useState(false)
  const [passworderror,setpassworderror]=useState(false)
  const [username,setusername]=useState("")
  const [usernameerror,setusernameerror]=useState(false)
  const [mobile,setmobile]=useState("")
  const [mobileerror,setmobileerror]=useState(false)
  const [userdata,setuserdata]=useState([])
  const [confirmpassword,setConfirmpassword]=useState("")
  const [confirmpassworderror,setConfirmpassworderror]=useState(false)
  const nav=useNavigate();
  const handleregister=()=>{
    nav("/login")
  }
  
  const handleusername=(data)=>{
      const uservalue=data.target.value
      setusername(data.target.value)
      if(uservalue.length>7){
             setusernameerror(true)
      }
      else{
          setusernameerror(false)
      }
     
      }
      
  
  const handleemail=(data)=>{
  const emailvalue=data.target.value
  setemail(data.target.value)
  if(emailvalue.length>18){
         setemailerror(true)
  }
  else{
      setemailerror(false)
  }
 
  
  }
  
  
  const handlepassword=(data)=>{
    const password=data.target.value
    setpassword(data.target.value)
  if(password.length > 8){
      setpassworderror(true)
  }
  else{
      setpassworderror(false)
  }
  
  
  }
  
  const handleconfirmpassword=(data)=>{
    const confirmpassword=data.target.value
    setConfirmpassword(data.target.value)
    if(password===confirmpassword){
      setConfirmpassworderror(false)
    }
    else{
      setConfirmpassworderror(true)
    }
    
    
  }



  

  const handlemobile=(data)=>{
      const Phone=data.target.value
      setmobile(data.target.value)
      if((Phone.length!==10)){
             setmobileerror(true)
      }
      else{
          setmobileerror(false)
      }
      
      }
      const navigate = useNavigate()
 const handlesubmit=(event)=>{
      event.preventDefault()
      
  const user_data={
      username:username,
      email:email,
      password:password,
      confirmpassword:confirmpassword,
      mobile:mobile
  }
  setuserdata([...userdata,user_data])
  userdata.push(user_data);
  localStorage.setItem("Gettingdata",JSON.stringify(userdata));
  if(usernameerror===false && emailerror===false && passworderror===false && confirmpassworderror===false && mobileerror===false){
  navigate('/login')
  }
  
}
      return(
             <div>

            <center> <h1 >Registration Form</h1></center>
            <form  onSubmit={handlesubmit}>
            <center>
            <b>Username</b><br/><input type="text"  value={username} onChange={(data)=>handleusername(data)} required/><br/>
               {
                  usernameerror && <p style={{color:"red"}}>username contain less than 8 characters</p>
               }
             <b>Email</b><br/>
              <input type="email" value={email} onChange={(data)=>handleemail(data)}/><br/>
              {
                  emailerror && <p style={{color:"red"}} >please enter valid email</p>
              }
              <b>Password</b><br/>
              <input type="password" value={password} onChange={(data)=>handlepassword(data)}/><br/>
              {
                 (passworderror)&&<p style={{color:"red"}}>password must be less than 8 characters </p>
              }
              <b>Confirm Password</b><br/>
              <input type="password" value={confirmpassword} onChange={(data)=>handleconfirmpassword(data)}/><br/>
              {
                 (confirmpassworderror)&&<p style={{color:"red"}}>password should be same as confirmpassword</p>
              }
            
             <b>Mobile.No</b><br/>
             <input type="number" id="number" value={mobile} onChange={(data)=>handlemobile(data)}/><br/>
             {
              mobileerror && <p style={{color:"red"}}>mobile number must contain 10 digits</p>
             }<br/>
             <button onClick={handlesubmit} style={{width:"160px"}}>submit</button>

             <h6 onClick={handleregister} style={{color:"red",marginTop:"20px"}}>already registered??login here</h6> 
             </center>
        
      
  </form>
  
             </div>
      );
}

export default Register