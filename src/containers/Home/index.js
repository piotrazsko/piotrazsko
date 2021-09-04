import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Profile } from "components";

const Home = ({ aaaa }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={4} lg={3}>
        <Profile />
      </Grid>
      <Grid item md={8} lg={9}>
        <header></header>
        <Grid container>
          <Grid item xs={12}>
            <Paper />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  // : PropTypes.
};

export default Home;
