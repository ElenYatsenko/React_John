import React from "react";
import Hello from "../components/Hello/index.js";
import RecentPosts from "../components/RecentPosts/index.js";
import FeaturedWorks from "../components/FeaturedWorks/index.js";
import Footer from "../components/Footer/index.js";
import styles from "./Page.module.css";
import "../index.css";

const Home = () => {
  return (
    <div className={"wrapper"}>
      <main className={styles.page}>
        <Hello />
        <RecentPosts />
        <FeaturedWorks
          featuredWorksTitle="Featured works"
          imgSrc={require("../img/works/01.jpg")}
          imgAlt="#1"
          worksTitle="Designing Dashboards"
          worksYear="2020"
          worksCategory="Dashboard"
          worksText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet."
          countWorksItem={3}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
