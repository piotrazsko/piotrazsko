import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import style from "./style.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "none",
  },
  firstLi: {
    display: "flex",
    "padding-bottom": "10px",
    "padding-left": "30px",
    position: "relative",
  },
}));

const List = ({ items, title }) => {
  const classes = useStyles();
  return (
    <ul className={style.ul}>
      <li className={classes.firstLi}>
        <Typography variant="h2" classes={{ root: classes.root }}>
          {title}
        </Typography>
      </li>
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
