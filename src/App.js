import ApplicationForm from "./Apps/Dashboard";
import ForgotPass from "./Apps/ForgotPass";
import Login from "./Apps/Login";
import Registrations from "./Apps/Registrations";
import Myheader from "./Apps/Myheader";
import Home from "./Apps/home"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./Apps/Sidebar";
import Surya from "./Apps/Surya";
import Lokesh from "./Apps/Lokesh";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registrations/>} />
          <Route path="/forgot" element={<ForgotPass/>}/>
          <Route path="/dashboard" element={<ApplicationForm/>}/>
          <Route path="/headerpage" element={<Myheader/>}/>
          <Route path="/sidebars" element={<Sidebar/>}/>
          <Route path="/suryas" element={<Surya/>}/>
          <Route path="/lokesh" element={<Lokesh/>}/>         

          </Routes>
      </BrowserRouter>


      
    </div>
  );
}

export default App;
