import React from "react";
import WorksItem from "./WorksItem/index.js";
import styles from "./FeaturedWorks.module.css";
import "../../index.css";

const FeaturedWorks = ({ featuredWorksTitle, countWorksItem }) => {
  return (
    <section className={styles.featuredWorks}>
      <div className={`${styles.featuredWorksContainer} ${"container"}`}>
        <div className={`${styles.featuredWorksTitle} ${"titlePosts"}`}>
          {featuredWorksTitle}
        </div>
        <div className={`${styles.featuredWorksItems} ${styles.works}`}>
          <WorksItem
            imgSrc={require("../../img/works/01.jpg")}
            imgAlt="1"
            worksTitle="Designing Dashboards"
            worksYear="2020"
            worksCategory="Dashboards"
            worksText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet."
          />
          <WorksItem
            imgSrc={require("../../img/works/02.jpg")}
            imgAlt="2"
            worksTitle="Vibrant Portraits of 2020"
            worksYear="2018"
            worksCategory="Illustration"
            worksText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet."
          />
          <WorksItem
            imgSrc={require("../../img/works/03.jpg")}
            imgAlt="3"
            worksTitle=" 36 Days of Malayalam type"
            worksYear="2018"
            worksCategory="Typography"
            worksText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet."
          />
          {countWorksItem > 3 && (
            <WorksItem
              imgSrc={require("../../img/works/04.jpg")}
              imgAlt="4"
              worksTitle="Components"
              worksYear="2018"
              worksCategory="Components, Design"
              worksText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet."
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
