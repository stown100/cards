import React from "react";
import styles from "./pagination.module.scss";

const Pagination = ({ setPaginationState, paginationState }) => {
  const validPrev = paginationState.page > 1;
  const validNext = paginationState.limit < 12;
  const onClickBtn = (e) => {
    const name = e.target.name;
    e.preventDefault();
    setPaginationState((prev) => {
      let newState = { ...prev };
      if (name === "prev" && validPrev) {
        newState = {
          ...prev,
          page: newState.page - 1,
          limit: newState.limit - 4,
        };
      } else if (name === "next" && validNext) {
        newState = {
          ...prev,
          page: newState.page + 1,
          limit: newState.limit + 4,
        };
      }
      return newState;
    });
  };
  return (
    <div className={styles.Pagination}>
      <button
        name="prev"
        className={`${styles.Pagination__prev} ${styles.Pagination__btn} ${
          !validPrev && styles.Pagination__btn_disabled
        }`}
        disabled={!validPrev ? true : false}
        onClick={(e) => onClickBtn(e)}
      >
        Назад
      </button>
      <input
        value={paginationState.page}
        className={styles.Pagination__input}
        disabled
      />
      <button
        name="next"
        className={`${styles.Pagination__next} ${styles.Pagination__btn} ${
          !validNext && styles.Pagination__btn_disabled
        }`}
        disabled={!validNext ? true : false}
        onClick={(e) => onClickBtn(e)}
      >
        Вперёд
      </button>
    </div>
  );
};

export default Pagination;
