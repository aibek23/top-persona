import React, { useState, useEffect, useCallback, useContext } from "react";
import { useHttp } from '../../../hooks/http.hook'
import { Context } from "../../../context/Context";
import AdminHeader from '../../../components/AdminHeader';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsSearch } from "react-icons/bs";
import VacanciesCartList from "../../../components/VacanciesCartList";
import Loading from "../../../img/loading.gif"
import AddCarousel from "./AddCarousel";

const AddReviews = () => {
  const { loading, request, error, clearError } = useHttp()
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("все");
  const [data, setData] = useState([]);
  const [cardId, setCardId] = useState("")
  const [cardIdDelate, setCardIdDelate] = useState("")
  const { token } = useContext(Context);

  const fetchData = useCallback(async () => {
    try {
      // const response = await request('', 'POST', { filterType })
      // setData(response);
    } catch (e) {
      if (e.message === 'Network Error') {
        toast.error('Network error. Please check your internet connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      } else {
        toast.error(`An error occurred: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      }
    }
  }, [filterType]);

  const DelateCard = useCallback(async (data) => {
    try {
      if (data) {
        const response = await request('', 'POST', { _id: data }, { Authorization: `Bearer ${token}` })
        toast.info(`${response.m}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchData();

      } else {
        toast.error('нет _id colaction', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return
      }
    } catch (e) {
      if (e.message === 'Network Error') {
        toast.error('Network error. Please check your internet connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      } else {
        toast.error(`An error occurred: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      }
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const ChangeCardById = (data) => {
    setCardId(data)
  }
  const DelateCardById = (data) => {
    DelateCard(data);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };



  const filterData = data?.filter((item) => {
    const titleIncludesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionIncludesQuery = item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const salaryIncludesQuery = item.salary.toString().includes(searchQuery);
    return titleIncludesQuery || descriptionIncludesQuery || salaryIncludesQuery;
  });

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    fetchData();
  };

  return (
    <div className="pt-5 mt-3">
      <AdminHeader />
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
      <AddCarousel path={""} _id={cardId} update={fetchData} setId={setCardId} />
      <main className="container mt-4">
        
      
        {/* 
        <div className="row">
          {!loading ? <>
            {filterData?.map((vacancy) => (

              <VacanciesCartList
                key={vacancy._id}
                getId={ChangeCardById}
                delate={DelateCardById}
                id={vacancy._id}
                imageSrc={vacancy.imageSrc}
                title={vacancy.title}
                salary={vacancy.salary}
                description={vacancy.description}
                searchQuery={searchQuery}
              />

            ))}{!filterData?.length ? <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6 mx-auto text-center">
                  <h1 className="display-4">Вакансия не найдена</h1>
                  <p className="lead">Извините, запрошенная вакансия не найдена.</p>
                  <p>Попробуйте изменить критерии поиска или вернитесь на главную страницу.</p>
                  <p>Для более точных результатов введите другие ключевые слова в строку поиска.</p>
                  <a href="/" className="btn btn-primary">Вернуться на главную</a>
                </div>
              </div>
            </div> : ""}</> : <div className="row align-items-center justify-content-center" style={{ height: "78vh" }}>
            <img src={Loading} style={{ width: "150px", height: "150px" }} alt="loading" />
          </div>}
        </div> 
      */}
      </main>
    </div>
  );
};

export default AddReviews;
