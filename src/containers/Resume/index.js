import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Pane, List, ClientCard } from "components";
import { useTranslation } from "react-i18next";
import { itemsEducation, itemsWorking } from "config/resume";
import { clients } from "config/clients.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
    boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
    minHeight: "186px",
  },
  icon: { width: "45px !important", height: "45px" },
  title: { marginTop: "10px" },
  content: { marginTop: "10px" },
  image: { width: "150px" },
}));

const Resume = ({ history, ...props }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Pane verticalOffset={26} title={t("resume")}>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <List title={t("resume_working")} items={itemsWorking(t)} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <List title={t("resume_education")} items={itemsEducation(t)} />
            </Box>
          </Grid>
        </Grid>
      </Pane>
      <Pane title={t("clients")}>
        <Grid container spacing={8}>
          {clients.map((i) => (
            <Grid item xs={4} key={i.image}>
              <ClientCard image={i.image} title={i.title} />
            </Grid>
          ))}
        </Grid>
      </Pane>
      <Pane title={t("testimonials")}>test</Pane>
    </>
  );
};

Resume.propTypes = {
  history: PropTypes.string,
};

export default Resume;
