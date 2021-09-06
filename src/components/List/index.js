import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";

const List = ({ items, title }) => {
  const classes = useStyles();
  return (
    <ul className={classes.ul}>
      <li className={[classes.li, classes.firstLi].join(" ")}>
        <Typography variant="h2" classes={{ root: classes.root }}>
          {title}
        </Typography>
      </li>
      {items.map((i, index) => (
        <li
          className={[
            classes.li,
            index === items.length - 1 ? classes.lastLi : "",
          ].join(" ")}
          key={index}
        >
          <span className={classes.title}>{i.title}:</span>
          <span className={classes.content}>{i.text}:</span>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  // : PropTypes.
};

export default List;
