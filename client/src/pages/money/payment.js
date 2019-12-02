import React, { useState, useEffect, useRef } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Input,
  Typography,
  Radio,
  RadioGroup,
  makeStyles
} from "@material-ui/core";
import Tooltip from "../../util/tooltip";
import {sendData} from "../../shared/functions";
import Title from "../../shared/components/title";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  input: {
    marginTop: 0
  },
  emailWrapper: {
    display: "inline-flex"
  },
  button: {
    margin: theme.spacing(1)
  },
  inline: {
    display: "inline-flex",
    alignItems: "center"
  },
  formGroup: {
    paddingLeft: 12
  },
  formControl: {
    marginRight: 0,
    minHeight: 76
  },
  eTransferTooltip: {
    marginLeft: 16
  }
}));

const PaymentMethods = props => {
  const classes = useStyles();
  const [methods, setMethods] = useState({
    email: false,
    cheque: false,
    cash: false,
    paypal: false,
    other: false
  });
  const [email, setEmail] = useState(null);
  const [autoDeposit, setAutoDeposit] = useState(false);
  const [other, setOther] = useState(null);
  const [postDatedCheque, setPostDatedCheque] = useState(false);
  const data = useRef({});

  useEffect(() => {
    return () => {
      data.current = { methods, email, autoDeposit, other, postDatedCheque }
    }
  });

  useEffect(() => {
    return () => {
      sendData(data.current);
    }
  }, []);

  const handleMethodsChange = method => {
    setMethods(prevState => ({ ...prevState, [method]: !methods[method] }));
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleOtherChange = event => {
    setOther(event.target.value);
  };

  const handlePostDatedChequeChange = event => {
    setPostDatedCheque(event.target.value === "yes");
  };

  const makeFormControl = (property, label) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={methods[property]}
          onChange={() => handleMethodsChange(property)}
          value={property}
          color="primary"
        />
      }
      label={label}
      className={classes.formControl}
    />
  );

  return (
    <>
      <Title>Payment Methods</Title>
      <div>
        <p>Select all the payment methods you will accept from your tenant</p>
        <FormGroup className={classes.formGroup}>
          <div className={classes.inline}>
            {makeFormControl("email", "Email transfer")}
            <Tooltip className={classes.eTransferTooltip}>
              Also known as e-transfers. Electronic transferring of money.
            </Tooltip>
            <div style={{ paddingLeft: 20, paddingTop: 10 }}>
              <Input
                className={classes.input}
                value={email}
                onChange={handleEmailChange}
                placeholder="enter email address..."
                style={{ display: "block" }}
              />
              <span className={classes.inline}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={autoDeposit}
                      onChange={() => setAutoDeposit(prevState => !prevState)}
                      value="autoDeposit"
                      color="primary"
                    />
                  }
                  label="I have auto-deposit. "
                />
                <Tooltip>
                  Money from email transfers will be automatically deposited.{" "}
                </Tooltip>
              </span>
            </div>
          </div>
          {makeFormControl("cheque", "Cheque")}
          {makeFormControl("cash", "Cash")}
          {makeFormControl("paypal", "Paypal")}
          <div className={classes.inline}>
            {makeFormControl("other", "")}
            <Input
              className={classes.input}
              value={other}
              placeholder="other (please specify)"
              onChange={handleOtherChange}
            />
          </div>
        </FormGroup>
        {methods.cheque && (
          <>
            <Typography variant="h3" className={classes.inline}>
              Are you requesting post-dated cheques?&nbsp;&nbsp;
              <Tooltip>
                Pre-written cheques that can be deposited at the time specified.
              </Tooltip>
            </Typography>
            <RadioGroup
              name="postDatedCheque"
              value={postDatedCheque ? "yes" : "no"}
              onChange={handlePostDatedChequeChange}
              className={classes.formGroup}
              row
            >
              <FormControlLabel
                value="yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentMethods;
