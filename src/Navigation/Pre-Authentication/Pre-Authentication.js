import { Route, Routes } from "react-router-dom";
import Register from "../../Screens/Pre-Authentication-Screen/Register";
import LoginPage from "../../Screens/Pre-Authentication-Screen/Login";
import ForgotPassword from "../../Screens/Pre-Authentication-Screen/Forgot";



function PreAuthentication(){
    return(
        <>
       <Routes>
        
        <Route path="/" element={<Register/>}/>
        <Route path="/Login"  element={<LoginPage/>}/>
        <Route path="/Forgot" element={<ForgotPassword/>}/>
        </Routes>
        </>
    )
}
export default PreAuthentication;