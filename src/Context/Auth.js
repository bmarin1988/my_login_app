import { createContext, useState } from "react";


const Auth = createContext();

const AuthProvider = ({children})=> {
  const [isLogged,setIsLogged]= useState (false);
  const [usu,setUsu]= useState ("");  
  const [pass,setPass]= useState ("");
  const data = {isLogged,setIsLogged,usu,setUsu,pass,setPass}

  return(
    <Auth.Provider value={data}>{children}</Auth.Provider>
  )
}

export {AuthProvider};
export default Auth;