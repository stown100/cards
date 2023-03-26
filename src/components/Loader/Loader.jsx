import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <i className={styles.Loader__el}></i>
      <i className={styles.Loader__el}></i>
    </div>
  );
};

export default Loader;
