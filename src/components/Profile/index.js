import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import style from "./style.scss";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Profile = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <Paper className={style.profile}>
      <Box className={style.profileName}>
        <Typography variant="h3">{t("user_name")}</Typography>
        <Typography variant="subtitle1">{t("user_position")}</Typography>
      </Box>
    </Paper>
  );
};

Profile.propTypes = {
  data: PropTypes.object,
};

export default Profile;
