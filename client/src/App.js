import React, { useEffect } from "react";
import { useLocation , Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Vacancies from "./pages/Vacancies";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import Prices from "./pages/Prices";
import Courses from "./pages/Courses";
import Reviews from "./pages/Reviews";
function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route index element={<Home />} />
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
