import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";

function AppLayout() {
  useEffect(() => {
    // Hit backend once when user opens site
    fetch("https://syncnote-wldj.onrender.com/ping")
      .then(() => console.log("Backend warmed up"))
      .catch(() => {});
  }, []);
  const location = useLocation();
  const hideNavOnRoute = ["/", "/login", "/signup"];
  const hideNav = hideNavOnRoute.includes(location.pathname);

  return (
    <>
      {!hideNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
