import React from "react";
import SearchFilter from "../components/SearchFilter";
import CartList from "../components/CartList";
function Vacancies() {
  const vacanciesData = [
    {
      id: 1,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:"(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:"https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    {
      id: 2,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:"(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:"https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    {
      id: 4,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:"(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:"https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    {
      id: 5,
      imageSrc:
        "https://rabota-za-granicej.ru/wp-content/uploads/f/1/7/f17ca075be6e3d8c19f615260c156d77.jpeg",
      title: "Медицинская сестра / Опекун в клиники Германии.",
      description:"(Ягуары, Мерседесы, Порше)На завод занимающийся производством металлических ящиков, паллет для транспортировки различных деталей для дорогих автомобилей",
      salary: "Зарплата от 2650 до 4150 евро в месяц.",
      url: "/vacancy/1",
      icons:"https://on-desktop.com/wps/World_Germany_Flag_of_Germany_035277_.jpg",
    },
    // Добавьте другие данные о вакансиях
  ];
  return (
    <div>
      <main className="container mt-4">
        <SearchFilter />
        <div className="row">
          {vacanciesData.map((vacancy) => (
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
