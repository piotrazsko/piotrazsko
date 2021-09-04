import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const List = ({ items }) => {
  return (
    <ul className={style.ul}>
      <li></li>
      {items.map((i, index) => (
        <li key={index}>
          <p>
            <span>{i.title}:</span>
            {i.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  // : PropTypes.
};

export default List;
