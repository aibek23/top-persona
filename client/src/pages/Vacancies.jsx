import React, { useState, useEffect,useCallback } from "react";
import {useHttp} from '../hooks/http.hook'
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsSearch } from "react-icons/bs";
import CartList from "../components/CartList";
import Loading from "../img/loading.gif"

const Vacancies = () => {
  const {loading, request, error, clearError} = useHttp()
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("все"); 
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await request('/api/vacancies/show', 'POST', {filterType})
      setData(response);
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
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  

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
    <div>
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
      <main className="container mt-4">
        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <div className="mb-2 searchFilterInput">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Поиск"
                  value={searchQuery}
                  onChange={handleSearch}
                />

                <button className="btn btn-outline-secondary">
                  <BsSearch size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="">
              <button
                type="button"
                className={`btn m-3 searchFilterButton  ${
                  filterType === "все" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("все".toLowerCase())}
              >
                Все
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "вакансии в германии".toLowerCase() ? "active" : ""
                }`}
                onClick={() => handleFilterChange("вакансии в германии".toLowerCase())}
              >
                Вакансии в Германии
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "вакансии в польшу" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("вакансии в польшу".toLowerCase())}
              >
                Вакансии в Польшу
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "Вакансии для мужчин".toLowerCase() ? "active" : ""
                }`}
                onClick={() => handleFilterChange("вакансии для мужчин".toLowerCase())}
              >
                Вакансии для мужчин
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "Вакансии для семейных пар и женщин".toLowerCase() ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Вакансии для семейных пар и женщин".toLowerCase())}
              >
                Вакансии для семейных пар и женщин
              </button>
            </div>
          </div>
        </div>
        <div className="row" style={{"minHeight":"78vh"}}>
        {!loading?<>
          {filterData?.map((vacancy) => (

                  <CartList
                    key={vacancy._id}
                    id={vacancy._id}
                    imageSrc={vacancy.imageSrc}
                    title={vacancy.title}
                    salary={vacancy.salary}
                    description={vacancy.description}
                    searchQuery={searchQuery}
                  />
   
          ))}{!filterData?.length? <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h1 className="display-4">Вакансия не найдена</h1>
              <p className="lead">Извините, запрошенная вакансия не найдена.</p>
              <p>Попробуйте изменить критерии поиска или вернитесь на главную страницу.</p>
              <p>Для более точных результатов введите другие ключевые слова в строку поиска.</p>
              {/* Сохраните строку поиска для дальнейшего использования */}
              <a href="/" className="btn btn-primary">Вернуться на главную</a>
            </div>
          </div>
        </div>:""}</>:<div className="row align-items-center justify-content-center"  style={{height:"78vh"}}>
            <img src={Loading} style={{width:"150px",height:"150px"}} alt="loading" />
        </div>}
        </div>
      </main>
    </div>
  );
};

export default Vacancies;
