import React from "react";
import styles from "./PostColumn.module.css";

const PostColumn = ({
  recentPostInfo1,
  recentPostInfo2,
  recentPostText,
  recentPostTitle,
  classLineShadow,
  classThinDark,
}) => {
  const url = "";
  return (
    <div className={styles.recentPostsColumn}>
      <article
        className={`${styles.recentPostsItem}   ${
          classLineShadow ? styles.recentPost : styles.worksItem
        }`}
      >
        <a href={url} className={styles.recentPostTitle}>
          {recentPostTitle}
        </a>
        <div className={styles.recentPostInfo}>
          {recentPostInfo1}
          <span className={styles.indent}>|</span>
          <span className={`${classThinDark ? styles.worksCategoryThin : ""}`}>
            {recentPostInfo2}
          </span>
        </div>
        <div className={`${styles.recentPostText} ${"text-"}`}>
          {recentPostText}
        </div>
      </article>
    </div>
  );
};

export default PostColumn;
