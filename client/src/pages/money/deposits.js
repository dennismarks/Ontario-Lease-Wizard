import React from "react";
import DepositBox from "../../components/DepositBox";
import { BASE_RENT_FORMATTED } from "../../shared/variables";
import { makeStyles } from "@material-ui/core";
import Title from "../../shared/components/title";

const useStyles = makeStyles(theme => ({
  otherDeposits: {
    marginBottom: theme.spacing(1) * 3
  }
}));

function Deposits() {
  const classes = useStyles();
  return (
    <div>
      <Title>Deposits</Title>
      <DepositBox
        typeDeposit="Rent deposit"
        typeDepositInfo="Rent deposit"
        requirement="You can only ask for a rent deposit for the last [period’s] rent."
        requireDescription="Last month's rent deposit is required."
        textTitle={BASE_RENT_FORMATTED}
        disabled={true}
      />
      <DepositBox
        typeDeposit="Key deposit"
        typeDepositInfo="Key deposit"
        requirement="Key deposits must be refundable"
        requireDescription="Required. Key deposit amount:"
        textTitle="Enter deposit amount"
      />
      <div className={classes.otherDeposits}>
        <h2>Other deposits</h2>
        <p>
          No other kinds of deposits (e.g. damage deposits) are permitted under
          the{" "}
          <a
            href="https://www.ontario.ca/laws/statute/06r17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <u>Residential Tenancies Act.</u>
            </b>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Deposits;
