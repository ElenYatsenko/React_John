import React from "react";
import styles from "./Page.module.css";
import Footer from "../components/Footer/index.js";
import PostColumn from "../components/PostColumn/index.js";
import MainTitlePage from "../components/MainTitlePage/MainTitlePage.js";
import "../index.css";

const Blog = () => {
  return (
    <div>
      <main className={styles.page}>
        <div className={`${"container"}`}>
          <MainTitlePage titlePage="Blog" indent={true} />
          <PostColumn
            recentPostTitle={"UI Interactions of the week"}
            recentPostInfo1={" 12 Feb 2019"}
            recentPostInfo2={"Express, Handlebars"}
            recentPostText={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            classLineShadow={false}
            classThinDark={true}
          />
          <PostColumn
            recentPostTitle={"UI Interactions of the week"}
            recentPostInfo1={" 12 Feb 2019"}
            recentPostInfo2={"Express, Handlebars"}
            recentPostText={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            classLineShadow={false}
            classThinDark={true}
          />
          <PostColumn
            recentPostTitle={"UI Interactions of the week"}
            recentPostInfo1={" 12 Feb 2019"}
            recentPostInfo2={"Express, Handlebars"}
            recentPostText={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            classLineShadow={false}
            classThinDark={true}
          />
          <PostColumn
            recentPostTitle={"UI Interactions of the week"}
            recentPostInfo1={" 12 Feb 2019"}
            recentPostInfo2={"Express, Handlebars"}
            recentPostText={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            classLineShadow={false}
            classThinDark={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
