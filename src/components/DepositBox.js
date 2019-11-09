import React from "react";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import ToolTip from "../util/tooltip";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 42,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200,
    display: "block"
  },
  form: {
    paddingLeft: 11
  },
  dividerStyle: {
    marginTop: theme.spacing(1) * 2,
    marginBottom: theme.spacing(1)
  },
  gridStyle: {
    marginTop: -11
  },
  datePick: {
    width: "65%",
    minHeight: 78
  }
}));

function DepositBox(props) {
  const classes = useStyles();
  const [required, setRequired] = React.useState("no");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const changeRequiredStatus = event => {
    setRequired(event.target.value);
  };
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <h2>{props.typeDepositInfo}</h2>
        <ToolTip style={{ paddingLeft: 4 }}>{props.typeDeposit}</ToolTip>
      </div>

      <p>
        {props.requirement}
        <br></br> Do you require a rent deposit?
      </p>
      <FormControl className={classes.form} component="fieldset">
        <RadioGroup
          aria-label={props.typeDeposit}
          value={required}
          onChange={changeRequiredStatus}
        >
          <FormControlLabel
            value="no"
            control={<Radio color="primary" />}
            label="Not Required"
          />
          <FormControlLabel
            value="yes"
            control={<Radio color="primary" />}
            label={props.requireDescription}
          />
        </RadioGroup>
      </FormControl>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={0}>
          <TextField
            margin="none"
            id="standard-basic"
            className={classes.textField}
            label={props.textTitle}
            disabled={props.disabled}
          />
        </Grid>
        <Grid item xs={1}>
          <p>due on: </p>
        </Grid>
        <Grid item xs={0}>
          <KeyboardDatePicker
            disableToolbar
            className={classes.datePick}
            variant="inline"
            inputVariant="outlined"
            format="MM/DD/YYYY"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
        <Grid item>
          <ToolTip style={{ paddingLeft: 4 }}>{props.typeDeposit}</ToolTip>
        </Grid>
      </Grid>
      <Divider className={classes.dividerStyle} />
    </>
  );
}

export default DepositBox;
