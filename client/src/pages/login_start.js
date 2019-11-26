import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const LoginProfile = props => {
  const classes = useStyles();
  return (
    <div>
      {/* TODO: Sign-in buttons are disabled until back-end is installed. */}
      <div className="loginLeft">
        <h3>Create Profile</h3>
        <p>
          If you would like to save your information for next time, please
          create a profile here.
        </p>
        <Button className="button" disabled={true}>
          Sign Up
        </Button>
        <h3 className="signIn">Sign In</h3>
        <div>
          <TextField
            disabled={true}
            id="standard-basic"
            className={classes.textField}
            label="Email address"
            margin="Password"
          />
        </div>
        <div>
          <TextField
            disabled={true}
            id="standard-basic"
            className={classes.textField}
            label="Standard"
            margin="normal"
          />
        </div>
        <Button className="button" disabled={true} id="signIn">
          Sign In
        </Button>
      </div>
      <div className="loginRight">
        <h3>Proceed as Guest</h3>
        <p>
          You can also proceed as a guest and have the option to save your
          information by creating a profile.{" "}
        </p>
        <Link to="/disclaimer" className="link">
          <Button className="button">Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginProfile;
