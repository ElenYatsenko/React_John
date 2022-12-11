import React from "react";
import WorkDetail from "../components/WorkDetail/index.js";
import Footer from "../components/Footer/index.js";
import styles from "./Page.module.css";

const WorksDetails = ({ articleTitle, articleCategory, articleYear }) => {
  return (
    <main className={styles.page}>
      <WorkDetail
        articleTitle={articleTitle}
        articleCategory={articleCategory}
        articleYear={articleYear}
      />
      <Footer />
    </main>
  );
};

export default WorksDetails;
