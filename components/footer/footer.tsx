import React from "react";
import styles from "./footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={styles.footer}>
      <p>Designed & Built by Nirjhor Nath</p>
    </div>
  );
};

export default Footer;
