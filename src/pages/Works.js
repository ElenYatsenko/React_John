import React from "react";
import styles from "./Page.module.css";
import Footer from "../components/Footer/index.js";
import MainTitlePage from "../components/MainTitlePage/MainTitlePage.js";
import "../index.css";
import FeaturedWorks from "../components/FeaturedWorks/index";

const Works = () => {
  return (
    <div className={"wrapper"}>
      <main className={styles.page}>
        <div className={`${"container"}`}>
          <MainTitlePage titlePage="Work" />
          <FeaturedWorks countWorksItem={4} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Works;
