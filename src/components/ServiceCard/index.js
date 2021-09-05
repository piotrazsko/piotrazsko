import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.scss";
// or

const ServiceCard = ({ icon, title, children }) => {
  return (
    <Paper className={style.container}>
      {icon ? <FontAwesomeIcon className={style.icon} icon={icon} /> : null}
      <Typography variant="h4" className={style.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={style.content}>
        {children}
      </Typography>
    </Paper>
  );
};

ServiceCard.propTypes = {
  // : PropTypes.
};

export default ServiceCard;
