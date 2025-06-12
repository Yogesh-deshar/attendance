import "./App.css";
import Userlogin from "./userlogin";
import "bootstrap/dist/css/bootstrap.css";
import Register from "./Register";
import Admin_dashbord from "./Admin/Admin_dashbord";
import Admin_login from "./Admin/Admin_login";
import UserHomePage from "./UserHomePage";
import Abour from "./Abour";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Userlogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin_login />} />
        <Route path="/admin/dashboard" element={<Admin_dashbord />} />
        <Route path="/" element={<UserHomePage />} />
        <Route path="/about" element={<Abour />} />
      </Routes>
    </>
  );
}

export default App;
