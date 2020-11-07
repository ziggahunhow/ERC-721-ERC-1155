import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  load: {
    marginTop: "50px",
  },
}));

function Loading() {
  const classes = useStyles();
  return <CircularProgress className={classes.load} />;
}

Loading.propTypes = {};

export default Loading;
