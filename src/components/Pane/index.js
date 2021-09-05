import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import style from "./style.scss";

const Pane = ({ title, children, grey = false }) => {
  return (
    <Grid
      container
      className={[style.container, grey ? style.grey : ""].join(" ")}
    >
      <Grid item xs={12}>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid className={style.content} item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

Pane.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  grey: PropTypes.bool,
};

export default Pane;
