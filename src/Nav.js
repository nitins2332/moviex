import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });

  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className={`nav`}>
      {/* <img
        className="nav_logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="Netflix Logo"
      /> */}
      <h2 className="nav_logo">MovieX</h2>

      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xpB71kI9huBVSY9DRYLoGhMWmUb3on98ZVMC4DIxTw&usqp=CAU&ec=48600112"
        alt="Avatar"
      />
    </div>
  );
};

export default Nav;
