// import React, { useState } from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
// import Courses from "../../pages/app/courses/Courses";

function Nav() {
  // const navigate = useNavigate();
  // const [onCourses, setOnCourses] = useState(false);

  // const handleClick = () => {
  //   navigate("/courses");
  //   setOnCourses(!onCourses);
  // }

  // const handleBack = () => {
  //   navigate("/");
  //   setOnCourses(!onCourses);
  // }
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to="/">
              <img
                className={style.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              />

            </Link>
            <h4>Coding Ninjas</h4>
          </div>
          <div className={style.nav_details}>
            <button>
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "OnCourses" : "Go to Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
