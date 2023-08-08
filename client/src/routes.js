import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vacancies from "./pages/Vacancies";
import AdminPage from "./pages/Admin/AdminPage";
import Prices from "./pages/Prices";
import Courses from "./pages/Courses";
import Reviews from "./pages/Reviews";
import AuthPage from "./pages/Admin/AuthPage";
import AddVacancies from "./pages/Admin/vacancies/AddVacancies";
import VacanciesCart from "./pages/Admin/vacancies/VacanciesCart";
import AddReviews from "./pages/Admin/reviews/AddReviews";
import VacanciesPage from "./pages/VacanciesPage";
import CheckUser from "./CheckUser";

export const useRoutes = (isAuthenticated) => {
  if (!isAuthenticated) {
    return (<>
      <Header authdata={!isAuthenticated}/>
      <Routes>
         <Route  path="/admin"   element={<AdminPage />} />
         <Route  path="/admin/vacancies"  element={<AddVacancies/>} />
         <Route path='/admin/vacancies/:id' element={<VacanciesCart/>} />
         <Route path='/admin/reviews' element={<AddReviews/>} />
         <Route path='/vacancies/:id' element={<VacanciesPage/>} />
        <Route index element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer/>
      </>
    );
  }

  return (
    <>
        <Header authdata={!isAuthenticated}/>
      <Routes>
  
        <Route path="/admin" element={<AuthPage />} />
        <Route index element={<Home />} />
        <Route path='/vacancies/:id' element={<VacanciesPage/>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/courses" element={<Courses />} />

      </Routes>
      <Footer/>
    </>
  );
};
