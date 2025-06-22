import "./App.css";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Features from "./components/Features"
import About from "./components/About"
import Signup from "./components/Signup";

function AppLayout() { // this is a random function creatd for the layout of the routes during render

  const loaction = useLocation();

  const hideNavOnRoute=["/login","/signup"];
  const hideNav = hideNavOnRoute.includes(location.pathname);


  return (
    <>
     
      {!hideNav && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path ="/features" element={<Features/>}/>
           <Route path ="/about" element={<About/>}/>
           <Route path = "/login" element={<Login/>}/>
           <Route path = "/signup" element={<Signup/>}/>
           
        </Routes>
  
     
  
    </>
  );
}


function App(){
  return (
    <Router>
      <AppLayout/>
    </Router>
  )
}

export default App;
