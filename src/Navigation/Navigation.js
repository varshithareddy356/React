import { BrowserRouter } from "react-router-dom"
import { PostAuthentication } from "./post-Authentication/Post-Authentication"
import PreAuthentication from './Pre-Authentication/Pre-Authentication';

import { createContext,  useState } from "react"



export const Login = createContext()


const NavigationComponent=()=>{

const [login,setlogin]=useState(false)

const handlelogin=()=>{
    

    setlogin(true)
}


    return(
        <>
                <Login.Provider value={{login,handlelogin}}>

        <BrowserRouter>
        
            {

              login ? <PostAuthentication/> :<PreAuthentication/>


            }

          
        </BrowserRouter>
              </Login.Provider>

        </>
    )
}
export default NavigationComponent