import React from 'react';

function AdminPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Пользователи</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Заказы</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Товары</a>
            </li>
          </ul>
        </div>
        <div className="col-md-9 col-lg-10 main">
          <h1 className="mb-4">Административная панель</h1>
          <p>Добро пожаловать в административную панель.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;