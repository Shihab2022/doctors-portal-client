import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage';
import Navbar from './Pages/Sherad/Navbar';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    </div>
  );
}

export default App;