import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const Disclaimer = props => {
  const [state, setState] = useState({
    agree: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className="disclaimer">
      <h3>
        You’re almost ready to get started! Please read our terms of use below.{" "}
      </h3>
      <p>
        Legal Disclaimer: this tool does not provide legal advice and does not
        guarantee compliance with the Residential Tenancies Act, 2006.
      </p>
      <p>
        The information you enter in this wizard will be strictly protected.
        Please read our Privacy Policy.{" "}
      </p>
      <p>
        By clicking “I agree”, you agree with the terms of our Privacy Policy
        and agree not to hold us liable for any disputes arising from the lease
        you create or review using this tool.
      </p>
      <p style={{ marginTop: "46px" }}>
        <Checkbox
          checked={state.agree}
          onChange={handleChange("agree")}
          value="agree"
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />
        <strong>I agree</strong>
      </p>
      <Link className={state.agree ? "link" : "disabledLink"} to="/rent">
        <Button className="button" disabled={!state.agree}>
          Next
        </Button>
      </Link>
    </div>
  );
};

export default Disclaimer;
