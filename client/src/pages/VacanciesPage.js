import React, { useCallback, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import { useParams } from 'react-router-dom';
import loadingImg from "../img/loading.gif";
import HtmlViewer from "../components/HtmlViewer";



const VacanciesPage = () => {
  const { id } = useParams();
  const { request, clearError } = useHttp();
  const [vacanciesData, setVacanciesData] = useState();
  const { token } = useContext(Context);


  const fetchVacanciesData = useCallback(async () => {
    try {
      const fetched = await request('/api/vacancies/page', 'POST', { _id: id }, { Authorization: `Bearer ${token}` });
      setVacanciesData(fetched);
    } catch (e) {
      if (e.message === 'Network Error') {
        toast.error('Network error. Please check your internet connection.');
        clearError();
      } else {
        toast.error(`An error occurred: ${e.message}`);
        clearError();
      }
    }
  }, [id, token, request]);

  useEffect(() => {
    fetchVacanciesData();
  }, [fetchVacanciesData]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!vacanciesData ?   
        <div className="container d-flex align-items-center justify-content-center" style={{ height: "600px" }}>
          <img src={loadingImg} style={{ width: "150px", height: "150px" }} alt="" />
        </div>
        :
        <div>
                      <HtmlViewer  html={vacanciesData.data}/>
        </div>
      }
    </>
  )
}

export default VacanciesPage;
