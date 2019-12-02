import React from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import Eye from "@material-ui/icons/RemoveRedEyeOutlined";
import previewPDF from "../../util/previewPDF"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    marginBottom: 20
  },
  title: {
    display: "inline-flex"
  },
  button: {
    display: "inline-flex",
    float: "right"
  }
}));

const Title = props => {
  const classes = useStyles();
  const { className, children } = props;
  return (
    <div className={`${classes.root} ${className}`}>
      <Typography variant="h1" className={classes.title}>{children}</Typography>
      <Button
        className={classes.button}
        variant="outlined"
        startIcon={<Eye />}
        onClick={previewPDF}
      >
        Preview Lease
      </Button>
    </div>
  );
};

export default Title;