import React from "react";
import styles from "./sidebar.module.css";

interface SideBarProps {}

const Sidebar: React.FC<SideBarProps> = ({}) => {
  return <div className={styles.sidebar} />;
};

export default Sidebar;
