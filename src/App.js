import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import './App.css'
import Signup from './Signup';

function App() {
  return (
    
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
