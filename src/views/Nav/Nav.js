import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        {/* nav link tự thêm class='active' -> scss(a.active)*/}
        <NavLink to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/todos" activeClassName="active">
          Todos
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          User
        </NavLink>

        {/* link không thêm class*/}
        {/* <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/about">About</Link> */}
      </div>
    );
  }
}

export default Nav;
