import React from "react";
import { useParams } from "react-router-dom";
import imgArticle01 from "../../img/articles/01.jpg";
import imgArticle02 from "../../img/articles/02.jpg";
import imgArticle03 from "../../img/articles/03.jpg";
import styles from "./WorkDetail.module.css";

const WorkDetail = ({ articleTitle, articleCategory, articleYear }) => {
  const params = useParams();
  console.log(params);
  return (
    <div className={styles.article}>
      <h1 className={styles.articleTitle}>{articleTitle}</h1>
      <div className={styles.articleInfo}>
        <div className={styles.articleYear}>{articleYear}</div>
        <div className={styles.articleCategory}>
          {articleCategory}, User Experience Design
        </div>
      </div>
      <div className={styles.articleText}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img src={imgArticle01} alt="article #01"></img>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img src={imgArticle02} alt="article #02"></img>
        <img src={imgArticle03} alt="article #03"></img>
      </div>
    </div>
  );
};

export default WorkDetail;
