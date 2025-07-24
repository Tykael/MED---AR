import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Appointments from "./views/appointments/appointments.jsx";
import AppointmentForm from "./views/appointmentForm/AppointmentForm.jsx";
import Home from "./views/home/Home.jsx";
import Login from "./views/login/Login.jsx";
import Register from "./views/register/Register.jsx";
import Landing from "./views/landing/Landing.jsx";
import Contact from "./views/contact/Contact.jsx";
import ErrorPage from "./views/errorpage/ErrorPage.jsx";
import About from "./views/about/About.jsx";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && pathname !== "/register" && pathname !== "/login" ? <Navbar /> : null}
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/appointments"} element={<Appointments />} />
        <Route path={"/appointmentForm"} element={<AppointmentForm />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
