import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Components/Login";
import Main from './pages/Main';
import { ThemeProvider } from './Context/Theme';
import { AuthProvider } from './Context/Auth';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element = {<Login/>}/>
              <Route exact path='/Main' element = {<Main/>}/>
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

