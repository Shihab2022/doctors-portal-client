import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Sherad/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/appointment" element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;