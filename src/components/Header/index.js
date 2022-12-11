import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLoyout from "../../loyouts/MainLoyout";
import Home from "../../pages/Home.js";
import Works from "../../pages/Works.js";
import Blog from "../../pages/Blog.js";
import NotFound from "../../pages/../pages/NotFound.js";
import WorksDetails from "../../pages/WorksDetails.js";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={` ${styles.headerMenu} ${styles.menu} `}>
        <Routes>
          <Route path="/" element={<MainLoyout />}>
            <Route index element={<Home />}></Route>
            <Route path="works" element={<Works />}></Route>
            <Route
              path="works/details/1"
              element={
                <WorksDetails
                  articleTitle="Designing Dashboards with usability in mind"
                  articleCategory="Dashboards"
                  articleYear="2020"
                />
              }
            ></Route>
            <Route
              path="works/details/2"
              element={
                <WorksDetails
                  articleTitle="Vibrant Portraits of 2020 with usability in mind"
                  articleCategory="Illustration"
                  articleYear="2018"
                />
              }
            ></Route>
            <Route
              path="works/details/3"
              element={
                <WorksDetails
                  articleTitle="36 Days of Malayalam type with usability in mind"
                  articleCategory="Typography"
                  articleYear="2018"
                />
              }
            ></Route>
            <Route
              path="works/details/4"
              element={
                <WorksDetails
                  articleTitle="Components with usability in mind"
                  articleCategory="Components"
                  articleYear="2018"
                />
              }
            ></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </header>
  );
};

export default Header;
