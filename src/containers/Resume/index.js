import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Profile, Header, Pane } from "components";

import { useTranslation } from "react-i18next";
const Home = ({ ...props }) => {
  const { t } = useTranslation();
  const [page, setPage] = React.useState();
  return (
    <>
      <Pane title={t("about_me")}>test</Pane>
      <Pane title={t("my_services")}>test</Pane>
      <Pane title={t("skills")}>test</Pane>
    </>
  );
};

Home.propTypes = {
  // : PropTypes.
};

export default Home;
