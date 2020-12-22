import React from "react";
import styles from "./friendsList.module.css";

const FrendsListItem = ({ friend }) => (
  <>
    <span
      className={friend.isOnline ? styles.statusOnline : styles.statusOffline}
    ></span>
    <img className={styles.avatar} src={friend.avatar} alt="" width="50" />
    <p className={styles.name}>{friend.name}</p>
  </>
);
export default FrendsListItem;
