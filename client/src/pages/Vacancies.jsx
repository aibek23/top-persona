import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from '../hooks/http.hook'
import { useLocation, Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsSearch } from "react-icons/bs";
import CartList from "../components/CartList";
import NotFoundMessage from "../components/NotFoundMessage";
import { Loader } from "../components/Loader";

const Vacancies = () => {
  const { loading, request, error, clearError } = useHttp()
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [data, setData] = useState([]);
  const [dataLoad, setDataLoad] = useState(false);
  const location = useLocation();
  const fetchData = useCallback(async () => {
    try {
      setData([])
      setDataLoad(true)
      const response = await request('/api/vacancies/show', 'POST', { filterType })
      setData(response);
      setDataLoad(false)

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
        setDataLoad(false)
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
        setDataLoad(false)
      }
    } finally {
      setDataLoad(false); // Верните dataLoad обратно в false после получения и обработки данных
    }
  }, [filterType]);
  const filterData = data?.filter((item) => {
    const titleIncludesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionIncludesQuery = item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const salaryIncludesQuery = item.salary.toString().includes(searchQuery);
    return titleIncludesQuery || descriptionIncludesQuery || salaryIncludesQuery;
  });
  const filteredData = filterData || [];
  const hasData = !!filteredData.length;
  useEffect(() => {
    const filterMapping = {
      "all": "все",
      "jobs+in+germany": "вакансии в германии",
      "jobs+in+poland": "вакансии в польшу",
      "jobs+in+lithuania": "вакансии в литве",
      "jobs+in+latvia": "вакансии в латвии",
      "study+in+germany": "обучение в германии"
    };
    const searchParam = location.search.replace("?", ""); // Убираем вопросительный знак
    if (filterMapping.hasOwnProperty(searchParam)) {
      setFilterType(filterMapping[searchParam]);
    }
    fetchData();
  }, [fetchData, location.search]);
  console.log(data);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
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
              <Link
                type="button"
                className={`btn m-3 searchFilterButton  ${filterType === "все" ? "active" : ""
                  }`}
                to="/vacancies?all"
              >
                Все
              </Link>
              <Link
                type="button"
                className={`btn  m-3  searchFilterButton ${filterType === "вакансии в германии".toLowerCase() ? "active" : ""
                  }`}
                to='/vacancies?jobs+in+germany'
              >
                Вакансии в Германии
              </Link>
              <Link
                type="button"
                className={`btn  m-3  searchFilterButton ${filterType === "вакансии в польшу" ? "active" : ""
                  }`}
                to='/vacancies?jobs+in+poland'
              >
                Вакансии в Польшу
              </Link >
              <Link
                type="button"
                className={`btn  m-3  searchFilterButton ${filterType === "Вакансии в литве".toLowerCase() ? "active" : ""
                  }`}
                to="/vacancies?jobs+in+lithuania"
              >
                Вакансии в Литве
              </Link>
              <Link
                type="button"
                className={`btn  m-3  searchFilterButton ${filterType === "Вакансии в латвии".toLowerCase() ? "active" : ""
                  }`}
                to="/vacancies?jobs+in+latvia"
              >
                Вакансии в Латвии
              </Link>
              <Link
                type="button"
                className={`btn  m-3  searchFilterButton ${filterType === "Обучение в Германии".toLowerCase() ? "active" : ""

                  }`}
                to="/vacancies?study+in+germany"
              >
                Обучение в Германии
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={{ minHeight: "78vh" }}>
          {dataLoad ? <Loader/>  : (
            <>
              {hasData ? (
                filteredData.map((vacancy) => (
                  <CartList
                    key={vacancy._id}
                    id={vacancy._id}
                    imageSrc={vacancy.imageSrc}
                    title={vacancy.title}
                    salary={vacancy.salary}
                    description={vacancy.description}
                    searchQuery={searchQuery}
                  />
                ))
              ) : (
                <NotFoundMessage/>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};
export default Vacancies;
