import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Pane, List, ClientCard } from "components";
import { useTranslation } from "react-i18next";
import { itemsEducation, itemsWorking } from "config/resume";
import { clients } from "config/clients.js";

const Resume = ({ history, ...props }) => {
  const { t } = useTranslation();
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
        <Grid container spacing={3}>
          {clients.map((i) => (
            <Grid item xs={6} lg={3} key={i.image}>
              <ClientCard image={i.image} title={i.title} />
            </Grid>
          ))}
        </Grid>
      </Pane>
      {/* <Pane title={t("testimonials")}>test</Pane> */}
    </>
  );
};

Resume.propTypes = {
  history: PropTypes.string,
};

export default Resume;
