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
            <Route path="/React_John" element={<Home />}></Route>
            <Route path="works" element={<Works />}></Route>
            {["/works/:details", ":details"].map((path) => (
              <Route
                path={path}
                element={
                  <WorksDetails
                    articleTitle="Designing Dashboards with usability in mind"
                    articleCategory="Dashboards"
                    articleYear="2020"
                  />
                }
              />
            ))}
            <Route path="blog" element={<Blog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </header>
  );
};

export default Header;
