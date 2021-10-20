import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import style from "./style.scss";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "../List";
import userImage from "assets/images/user_image.jpg";
import userImageWebp from "assets/images/user_image.webp";

const Profile = ({ ...props }) => {
  const { t } = useTranslation();
  const items = [
    { title: `${t("name")}:`, text: t("user_name") },
    { title: `${t("birthdate")}:`, text: t("user_birth_date") },
    { title: `${t("job")}:`, text: t("user_job") },
    { title: `${t("email")}:`, text: t("user_email") },
    { title: `${t("linkedin")}:`, text: t("user_linkedin") },
  ];

  return (
    <Paper className={style.profile}>
      <Box className={style.profileName}>
        <Typography variant="h3">{t("user_name")}</Typography>
        <Typography variant="subtitle1">{t("user_position")}</Typography>
      </Box>
      <Box component="figure" className={style.profileImageFigure}>
        <picture>
          <source srcset={userImageWebp} type="image/webp"></source>
          <source srcset={userImage} type="image/jpeg"></source>
          <img className={style.image} src={userImage} alt="user portrait" />
        </picture>
      </Box>
      <List showDates={false} items={items} />
      <div className={style.buttonContainer}>
        <Button variant="contained" color="primary" className={style.download}>
          {t("button_download_cv")}
        </Button>
      </div>
    </Paper>
  );
};

Profile.propTypes = {
  data: PropTypes.object,
};

export default Profile;
