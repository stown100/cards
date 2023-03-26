import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

const Card = (card) => {
  return (
    <article className={styles.Card}>
      <Image
        className={styles.Card__img}
        src={card.avatar}
        loader={() => card.avatar}
        unoptimized={true}
        width={300}
        height={300}
        alt={card.avatar}
      />
      <span
        className={`${
          card.badge === "top" ? styles.Card__badgeTop : styles.Card__badgeNew
        } ${styles.Card__badge}`}
      >
        {card.badge.toUpperCase()}
      </span>
      <div className={`${styles.Card__description} ${styles.Description}`}>
        <h4 className={styles.Description__title}>{card.name}</h4>
        <p className={styles.Description__brandName}>{card.brand_name}</p>
        <span className={styles.Description__price}>{`${card.price} $`}</span>
      </div>
    </article>
  );
};

export default Card;
