import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // ใช้ Routes แทน Switch
import "./index.css";
import Navbar from "./Components/Navbar";
import AnimationBg from "./Components/AnimationBg";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm"; // นำเข้า SignUpForm
import { RxHamburgerMenu } from "react-icons/rx";

const App = () => {
  const [openNav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!openNav);
  };

  return (
    <Router>
      <div className="min-h-screen flex bg-mainbg">
        {/* ครึ่งซ้ายที่มีรูปภาพ */}
        <div className="left-side"></div>

        {/* ครึ่งขวาที่มี Navbar และ ฟอร์ม */}
        <div className="right-side flex-1 relative">
          <AnimationBg />
          <div
            className={`m-[0.5%] bg-tran transition-all duration-300 ease-in-out ${openNav ? "w-[15%]" : "w-0"} overflow-hidden z-50`}
          >
            <Navbar />
          </div>
          <div
            className="absolute top-[3%] left-[1.5%] bg-transparent z-50"
            onClick={handleNavbar}
          >
            <RxHamburgerMenu />
          </div>

          {/* ใช้ react-router-dom เพื่อกำหนดเส้นทาง */}
          <Routes>
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
