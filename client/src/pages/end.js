import React from "react";
import {IconButton, makeStyles} from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Print from "@material-ui/icons/PrintOutlined";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Restart from "@material-ui/icons/Cached";
import Mail from "@material-ui/icons/MailOutline";
import {withRouter} from "react-router";

const useStyles = makeStyles(theme => ({
  listItem: {
    display: "inlineFlex"
  },
  icon: {
    color: theme.primary
  },
  inline: {
    display: "flex",
    alignItems: "center"
  },
  arrow: {
    marginRight: 4
  }
}));

const End = props => {
  const classes = useStyles();

  const print = () => {

  };

  const save = () => {

  };

  const restart = () => {
    props.history.push('/disclaimer');
  };

  const email = () => {

  };

  const makeListItem = (text, icon, callback) => (
    <div className={classes.inline}>
      <ArrowForward color="primary" className={classes.arrow} /> {text} <IconButton onClick={callback}>{icon}</IconButton>
    </div>
  );

  return (
    <>
      <h1>You're almost done!</h1>
      <p>Thank you for filling out all the sections. Now you can view a copy of your lease and send it to your tenant
        for review. Please note we recommend printing our the PDF, then review and sign with your tenant.</p><br/>
      <h1>Here's a few options for you: </h1>
      {makeListItem("Print your lease", <Print color="primary" />, print)}
      {makeListItem("Save as PDF", <SaveAlt color="primary" />, save)}
      {makeListItem("Restart the process", <Restart color="primary" />, restart)}
      {makeListItem("Send to tenant to review", <Mail color="primary" />, email)}
    </>
  )
};

export default withRouter(End);