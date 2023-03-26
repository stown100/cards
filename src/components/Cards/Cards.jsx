import React from "react";
import Card from "../Card/Card";
import styles from "./cards.module.scss";

const Cards = ({ cards }) => {
  return (
    <div className={styles.Cards}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
