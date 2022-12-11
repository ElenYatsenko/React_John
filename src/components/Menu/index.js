import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import styles from "./Menu.module.css";

const Menu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const setActive = ({ isActive }) =>
    isActive ? styles.active : styles.menuLink;

  return (
    <div className={styles.headerContent}>
      <nav className={styles.navBar}>
        <button className={styles.menuIcon} onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose className={styles.iconMenu} />
          ) : (
            <FiMenu className={styles.iconMenu} />
          )}
        </button>
        <ul
          className={`${styles.menuList} ${styles.menuNav} ${
            navbarOpen ? styles.showMenu : ""
          } 
        }`}
        >
          <NavLink
            to="/"
            className={setActive}
            onClick={() => closeMenu()}
            exact="true"
          >
            Home
          </NavLink>
          <NavLink
            to="works"
            className={setActive}
            onClick={() => closeMenu()}
            exact="true"
          >
            Works
          </NavLink>
          <NavLink
            to="blog"
            className={setActive}
            onClick={() => closeMenu()}
            exact="true"
          >
            Blog
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
