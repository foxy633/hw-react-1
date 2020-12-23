import React from "react";
import PropTypes from "prop-types";
import styles from "./friendsList.module.css";
import FrendsListItem from "./FrendListItem";

const FriendList = ({ friends }) => (
  <ul className={styles.friend}>
    {friends.map((friend) => (
      <FrendsListItem friend={friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
