import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainLoyout from "../../loyouts/MainLoyout";
import Home from "../../pages/Home";
import Works from "../../pages/Works";
import Blog from "../../pages/Blog";
import NotFound from "../../pages/../pages/NotFound";
import WorksDetails from "../../pages/WorksDetails";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={` ${styles.headerMenu} ${styles.menu} `}>
        <Routes>
          <Route path="/" element={<MainLoyout />}>
            <Route index element={<Home />}></Route>
            <Route path="works" element={<Works />}></Route>
            <Route path="works/:details" element={<WorksDetails />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </header>
  );
};

export default Header;
