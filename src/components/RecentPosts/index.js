import React from "react";
import PostColumn from "../PostColumn/index.js";
import styles from "./RecentPosts.module.css";
import "../../index.css";

const RecentPosts = () => {
  const url = "";
  return (
    <section className={styles.recentPosts}>
      <div className={`${styles.recentPostsContainer} ${"container"}`}>
        <div className={styles.recentPostsHeader}>
          <div className={`${styles.recentPostsTitle} ${"titlePosts"}`}>
            Recent posts
          </div>
          <a href={url} className={styles.recentPostsViewAll}>
            View all
          </a>
        </div>
        <div className={styles.recentPostsItems}>
          <PostColumn
            recentPostTitle={"Making a design system from scratch"}
            recentPostInfo1={" 12 Feb 2020"}
            recentPostInfo2={"Design, Pattern"}
            recentPostText={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            classLineShadow={true}
            classThinDark={false}
          />
          <PostColumn
            recentPostTitle={"Creating pixel perfect icons in Figma"}
            recentPostInfo1={" 12 Feb 2020"}
            recentPostInfo2={"Figma, Icon Design"}
            recentPostText={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            classLineShadow={true}
            classThinDark={false}
          />
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
