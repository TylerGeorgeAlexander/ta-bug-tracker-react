import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useUser } from 'react'

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
