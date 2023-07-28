import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";

const AdminHeader = () => {
  const auth = useContext(Context);
  const logoutHandler = () => {
    auth.logout();
    window.location.reload();
  };
  return (
    <div
      style={{
        zIndex: "1512",
        position: "absolute",
        width: "-webkit-fill-available",
        top: 0,
      }}
    >
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ height: "45px" }}
      >
        <Container>
          <Navbar.Brand href="/admin">Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
            <Nav.Link href="#settings " onClick={(e) => logoutHandler(e)}>
              выйти из админ-панели
              </Nav.Link>
              <NavLink to="/" className="nav-link">
              вернуться на сайт
              </NavLink>
              <NavLink exact="true" to="/admin" className="nav-link">
                главная
              </NavLink>
              <NavLink  to="/admin/reviews" className="nav-link">
              отзывы
              </NavLink>
              <NavLink to="/admin/vacancies" className="nav-link">
              вакансии
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminHeader;
