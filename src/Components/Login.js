import React, {useState} from 'react'
import Main from './Main'

const Login = () => {
  const [miLogin,setMiLogin]= useState ("false");
  const [usu,setUsu]= useState ("");  
  const [pass,setPass]= useState ("");  

  function iniciarSesion(e){
    e.preventDefault();
    if(usu.length=== 0|| pass.length === 0){
      alert("Complete los datos faltantes");}
      else{
        if(pass.length < 4){
        alert("Contraseña debe tener minimo 4 caracteres")
        setUsu("");
        setPass("");
      }
          else
          {setMiLogin("true");
           document.getElementById("form_login").style.display = "none"
          
          }
    
  }}
    return (
      <div>
        <h2>Web Page</h2>
        <h3>Insert your data </h3>
        <form id="form_login">
          <label>Usuario</label>
          <input
            type="text"
            onChange={(e)=>setUsu(e.target.value)}
            required
            placeholder="Insert your full name"
          />
          <label> Password </label>
          <input
            type="password"
            onChange={(e)=>setPass(e.target.value)}
            required
          />
          <button type = "submit" name="login" onClick={iniciarSesion}>
            Login 
          </button>
        </form>

        {miLogin === "true" && <Main usu = {usu}/>}
        </div>
    );
}

export default Login