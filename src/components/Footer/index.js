import React from "react";
import LinkSocial from "./LinkSocial/LinkSocial.js";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent}`}>
        <div className={`${styles.footerSocial} ${styles.social}`}>
          <LinkSocial social={"iconFb"} />
          <LinkSocial social={"iconInsta"} />
          <LinkSocial social={"iconTwitter"} />
          <LinkSocial social={"iconLinkedin"} />
        </div>
        <div className="footer__copy">Copyright ©2020 All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
