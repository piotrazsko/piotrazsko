import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Pane, List } from "components";
import { useTranslation } from "react-i18next";

const Resume = ({ history, ...props }) => {
  const { t } = useTranslation();
  const itemsWorking = [
    {
      title: t("position_0"),
      text: t("position_0_extend"),
      dates: t("position_0_dates"),
    },
    {
      title: t("position_0"),
      text: t("position_0_extend"),
      dates: t("position_0_dates"),
    },
    {
      title: t("position_0"),
      text: t("position_0_extend"),
      dates: t("position_0_dates"),
    },
    {
      title: t("position_0"),
      text: t("position_0_extend"),
      dates: t("position_0_dates"),
    },
  ];
  const itemsEducation = [
    {
      title: t("position_0"),
      text: t("position_0_extend"),
      dates: t("position_0_dates"),
    },
    {
      title: t("position_0"),
      text: t("position_0_extend"),
      dates: t("position_0_dates"),
    },
  ];
  return (
    <>
      <Pane verticalOffset={26} title={t("resume")}>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <List title={t("resume_working")} items={itemsWorking} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <List title={t("resume_education")} items={itemsEducation} />
            </Box>
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
