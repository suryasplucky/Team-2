import ForgotPass from "./Apps/ForgotPass";
import Login from "./Apps/Login";
import Registrations from "./Apps/Registrations";
import Home from "./Apps/home"
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registrations/>} />
          <Route path="/forgot" element={<ForgotPass/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
