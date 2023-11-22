import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../Screens/Home-Screen";
import AboutScreen from "../../Screens/About-Screen";
import ContactScreen from "../../Screens/Contact-Screen";
import ProductDetailed from "../../Screens/Product-Detailed";



export function PostAuthentication(){
    return(
        <>
        <Routes>
        <Route path="/" element={<HomeScreen/>} />
          <Route path="/about" element={<AboutScreen/>} /> 
          <Route path="/contact" element={<ContactScreen />} /> 
          <Route path="/product/:id" element={<ProductDetailed/>}/>
          <Route path="/*" element={<HomeScreen/>}/>
          </Routes>
        </>
    )
}