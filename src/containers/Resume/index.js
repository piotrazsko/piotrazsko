import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Pane, List } from "components";

import { useTranslation } from "react-i18next";

const Resume = ({ history, ...props }) => {
  const { t } = useTranslation();
  const itemsWorking = [
    { title: t("name"), text: t("user_name") },
    { title: t("birthdate"), text: t("user_birth_date") },
    { title: t("job"), text: t("user_job") },
    { title: t("email"), text: t("user_email") },
    { title: t("linkedin"), text: t("user_linkedin") },
  ];
  const itemsEducation = [
    { title: t("name"), text: t("user_name") },
    { title: t("birthdate"), text: t("user_birth_date") },
    { title: t("job"), text: t("user_job") },
    { title: t("email"), text: t("user_email") },
    { title: t("linkedin"), text: t("user_linkedin") },
  ];

  return (
    <>
      <Pane title={t("resume")}>
        <Grid container>
          <Grid item xs={6}>
            <List title={t("resume_working")} items={itemsWorking} />
          </Grid>
          <Grid item xs={6}>
            <List title={t("resume_education")} items={itemsEducation} />
          </Grid>
        </Grid>
      </Pane>
      <Pane title={t("clients")}>test</Pane>
      <Pane title={t("testimonials")}>test</Pane>
    </>
  );
};

Resume.propTypes = {
  history: PropTypes.string,
};

export default Resume;
