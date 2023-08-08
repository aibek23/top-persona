import React from "react";

const NotFoundMessage = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <h1 className="display-4">Вакансия не найдена</h1>
          <p className="lead">Извините, запрошенная вакансия не найдена.</p>
          <p>Попробуйте изменить критерии поиска или вернитесь на главную страницу.</p>
          <p>Для более точных результатов введите другие ключевые слова в строку поиска.</p>
          <a href="/" className="btn btn-primary">
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundMessage;