import { useEffect, useRef } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Siginup from "../pages/Siginup";
import Seller from "../pages/Seller";
import Buyer from "../pages/Buyer";
import NotFound from "../pages/NotFound";
import { Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import toast, { Toaster } from "react-hot-toast";
const GsapTrasition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(
        nodeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inf" }
      );
    }
  }, [location]);

  return (
    <div ref={nodeRef}>
      <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Siginup />} />
        <Route path="/seller/profile" element={<Seller />} />
        <Route path="/buyer/profile" element={<Buyer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default GsapTrasition;
