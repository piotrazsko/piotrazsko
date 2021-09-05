import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { faLaptopCode, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs, faApple } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { Pane, ServiceCard, SkillItem } from "components";

const Home = ({ ...props }) => {
  const { t } = useTranslation();
  const skills = [
    { title: "JavaScript", percent: 90 },
    { title: "React", percent: 85 },
    { title: "React Native", percent: 85 },
    { title: "Redux", percent: 90 },
    { title: "Redux-saga", percent: 90 },
    { title: "NextJs", percent: 90 },
    { title: "NodeJs", percent: 50 },
    { title: "Git", percent: 75 },
    { title: "Sass", percent: 85 },
    { title: "Html", percent: 85 },
    { title: "Css", percent: 85 },
  ];
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
            <ServiceCard icon={faApple} title={t("mobile_development")}>
              {t("card_web_development")}
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard icon={faNodeJs} title={t("backend_development")}>
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
      <Pane title={t("skills")}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {skills
              .filter((i, index) => index % 2 === 0)
              .map((i) => (
                <SkillItem title={i.title} key={i.title} percent={i.percent} />
              ))}
          </Grid>
          <Grid item xs={6}>
            {skills
              .filter((i, index) => index % 2 === 1)
              .map((i) => (
                <SkillItem title={i.title} key={i.title} percent={i.percent} />
              ))}
          </Grid>
        </Grid>
      </Pane>
    </>
  );
};

Home.propTypes = {
  // : PropTypes.
};

export default Home;
