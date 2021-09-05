import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Pane, ServiceCard } from "components";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Home = ({ ...props }) => {
  const { t } = useTranslation();
  const [page, setPage] = React.useState();
  return (
    <>
      <Pane title={t("about_me")}>
        <Typography variant="body1">{t("user_about_me")}</Typography>
      </Pane>
      <Pane grey title={t("my_services")}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <ServiceCard icon={faLaptopCode} title={t("web_development")}>
              {t("card_web_development")}
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard icon={faLaptopCode} title={t("web_development")}>
              {t("card_web_development")}
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard icon={faLaptopCode} title={t("web_development")}>
              {t("card_web_development")}
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard icon={faLaptopCode} title={t("web_development")}>
              {t("card_web_development")}
            </ServiceCard>
          </Grid>
        </Grid>
      </Pane>
      <Pane title={t("skills")}>test</Pane>
    </>
  );
};

Home.propTypes = {
  // : PropTypes.
};

export default Home;
