import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Fibunacci from './Fibunacci'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
 
  return(
  <>
    <Header />
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path = 'fibunacci' element={<Fibunacci />}/>
    </Routes>
  </BrowserRouter>
  </>
)}
  
export default App;
                