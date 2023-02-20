import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Auth from '../Context/Auth';
import Theme from '../Context/Theme';
import '../Login.css'


const Login = () => {
  
  const {theme,handleTheme}=useContext(Theme);
  const {setUsu,setPass,setIsLogged}=useContext(Auth);
  const [usuLocal, setUsuLocal] = useState("");
  const [passLocal, setPassLocal] = useState("");
  let navigate = useNavigate();

  const onLogin = (e) => {
    //e.preventDefault();
    console.log('redirecting :'+ usuLocal)
    console.log()
    if(usuLocal.length=== 0 || passLocal.length === 0){
      alert("Complete los datos faltantes");
    }
    else{
        if(passLocal.length < 4){ 
            setUsu("");
            setPass("");
            alert("Contraseña debe tener minimo 4 caracteres")
        }
        else {
            
            setIsLogged(true);
            setUsu(usuLocal);
            setPass(passLocal);
            navigate('/Main');
            // document.getElementById("form_login").style.display = "none"    
        }
      }
  }

    return (
     
      <div className='container'>
        
        <form id="form_login" className={theme}>
            <input
              type="radio"
              name="theme"
              id="light"
              onClick={(e)=>handleTheme(e.target.value)}
              value="light"
            />
            <label htmlFor="light">Light</label>
            <br />
            <input
              type="radio"
              name="theme"
              id="dark"
              onClick={(e)=>handleTheme(e.target.value)}
              value="dark"
            />
            <label htmlFor="dark"> Dark </label>

            <h2 style={{textAlign:"center"}}> Business Website </h2>
              <div>
                <h3 style={{textAlign:"center"}}>Insert your data </h3>
                  <label>Usuario</label>
                  <input
                    type="text"
                    style={{textAlign:"center"}} 
                    className="form-control"
                    onChange={(e)=>setUsuLocal(e.target.value)} 
                    required
                    placeholder="Insert your full name"
                    value={usuLocal}
                  />
              </div>
              <div>
                  <label> Password </label>
                  <input
                    type="password"
                    style={{textAlign:"center"}} 
                    className="form-control"
                    onChange={(e)=>setPassLocal(e.target.value)}
                    required
                    value={passLocal}
                  />
              </div><br/>
              <button type = "submit" className="btn btn-primary"name="login" onClick={()=>onLogin()} 
               >
                Login 
              </button>      
        </form>
        { /*
          {isLogged===true && <Main usu = {usu}/>}
    */}   
      </div>
    );
}

export default Login