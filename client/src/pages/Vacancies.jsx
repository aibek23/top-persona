import React, { useState ,useEffect} from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from "react-icons/bs";
import CartList from "../components/CartList";
function Vacancies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // Значение по умолчанию для фильтра (может быть 'all', 'videos', 'channels', и т.д.)
  const [data, setData] = useState(
    [{
      id: 1,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:
        "(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:
        "https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    {
      id: 2,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:
        "(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:
        "https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    {
      id: 4,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:
        "(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:
        "https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    {
      id: 5,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:
        "(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:
        "https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    }]
  );

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/data?filter=${filterType}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   const delaySearch = setTimeout(() => {
  //     fetchData();
  //   }, 500); // Adjust the delay as needed (milliseconds)
  //   return () => clearTimeout(delaySearch);
  // }, [searchQuery, filterType]);

  useEffect(() => {
    setData(
      data.filter(item => item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery(e.target.value);
    console.log(searchQuery,data);
    // Очищаем поисковый запрос после поиска

   
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    fetchData();
  };

  return (
    <div>
      <main className="container mt-4">
        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <form  className=" mb-2 searchFilterInput">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Поиск"
                  value={searchQuery}
                  onChange={handleSearch}
                />

                <button  className="btn btn-outline-secondary">
                  <BsSearch size={24} />
                </button>
              </form>
            </div>
          </div>
          <div className="row ">
            <div className="">
              <button
                type="button"
                className={`btn m-3 searchFilterButton  ${
                  filterType === "all" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("all")}
              >
                Все
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "germany" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("germany")}
              >
                Вакансии в Германии
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "poland" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("poland")}
              >
                Вакансии в Польшу
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "jobs_for_men" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("jobs_for_men")}
              >
                Вакансии для мужчин
              </button>
              <button
                type="button"
                className={`btn  m-3  searchFilterButton ${
                  filterType === "vacancies_for_couples" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("vacancies_for_couples")}
              >
                Вакансии для семейных пар и женщин
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((vacancy) => (
            <CartList
              key={vacancy.id}
              imageSrc={vacancy.imageSrc}
              title={vacancy.title}
              salary={vacancy.salary}
              url={vacancy.url}
              description={vacancy.description}
              icons={vacancy.icons}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default Vacancies;
