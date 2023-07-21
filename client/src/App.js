import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Vacancies from "./pages/Vacancies";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import Prices from "./pages/Prices";
import Courses from "./pages/Courses";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const TopClick = useRef(null);

  function handleAboutClick() {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleContactClick() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleTopClick() {
    if (TopClick.current) {
      TopClick.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const refs = {
    aboutRef,
    contactRef,
    TopClick,
  };

  return (
    <>
      <Header
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
        onTopClick={handleTopClick}
      />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route index element={<Home refs={refs} />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
