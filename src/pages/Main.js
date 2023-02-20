
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Auth from '../Context/Auth'
import Theme from '../Context/Theme';


const Main = () => {
  const {usu} = useContext(Auth);
  const {theme} = useContext(Theme);
  return (
  <>  
    <div id="main-box" style={{textAlign:"left"}} className={theme}>

      <strong className="h3">
        Welcome User : {usu}
      </strong>
                
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
        <div className="container-fluid">

          <label className="navbar-brand  h5" href=" ">Menú Principal</label>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/Company" className="nav-link  h5  text-center"  >About Us</NavLink>
              <NavLink to="/Customers" className="nav-link  h5  text-center"  >Customers</NavLink>
              <NavLink to="/Documents" className="nav-link  h5  text-center"  >Documents</NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </div>

</>
   
  
     
  )
}

export default Main