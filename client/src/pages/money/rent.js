import React, { useState } from "react";
import moment from "moment";

import {
  makeStyles,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Modal,
  Backdrop,
  InputAdornment
} from "@material-ui/core";
//Don't input these together as we don't want to load all 1000+ icons at once
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InfoIcon from "@material-ui/icons/Info";
import { useSpring, animated } from "react-spring/web.cjs";
import { CustomDatePicker } from "../../shared/components/datePicker"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  rentPeriod: {
    marginTop: 20,
    marginLeft: 20
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 125
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  calenderButton: {
    padding: 0
  }
}));

const Rent = props => {
  const classes = useStyles();
  const [selectedDateStart, setSelectedDateStart] = useState(moment());
  const [selectedDateEnd, setSelectedDateEnd] = useState(moment());
  const [fixedTerm, setFixedTerm] = useState("no");
  const [rentPeriod, setRentPeriod] = useState("monthly");
  const [rentAmount, setRentAmount] = useState("");
  const [rentPeriodText, setRentPeriodText] = useState("bi-weekly");
  const [open, setOpen] = useState(false);

  const handleRentPeriodText = event => {
    setRentPeriodText(event.target.value);
  };
  const handleRentAmount = event => {
    setRentAmount(event.target.value);
  };

  const handleRentPeriod = event => {
    setRentPeriod(event.target.value);
  };
  const handleFixedTerm = event => {
    setFixedTerm(event.target.value);
  };

  const handleDateChangeStart = date => {
    setSelectedDateStart(date);
  };

  const handleDateChangeEnd = date => {
    setSelectedDateEnd(date);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      }
    });

    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });

  const calenderPickerStart = (
    <CustomDatePicker
      id="date-picker-dialog"
      label="Lease Start Date"
      value={selectedDateStart}
      onChange={handleDateChangeStart}
    />
  );

  const calenderPickerEnd = (
    <CustomDatePicker
      id="date-picker-dialog"
      label="Lease End Date"
      value={selectedDateEnd}
      onChange={handleDateChangeEnd}
      error={selectedDateStart > selectedDateEnd}
      minDate={selectedDateStart}
      helperText={
        selectedDateStart > selectedDateEnd
          ? "End date should be after start date"
          : ""
      }
    />
  );

  const radioButtons = (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="pmsition"
        name="position"
        value={fixedTerm}
        onChange={handleFixedTerm}
        row
      >
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
          labelPlacement="end"
        />

        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );

  const FormRowFixedTerm = (
    <React.Fragment>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        {calenderPickerStart}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        {calenderPickerEnd}
      </Grid>
    </React.Fragment>
  );

  const FormRowFlexibleTerm = (
    <React.Fragment>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        {calenderPickerStart}
      </Grid>
    </React.Fragment>
  );

  const infoModal = (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paperModal}>
          <h1 id="spring-modal-title">More information about base rent</h1>
          <p id="spring-modal-description">Lorem Ipsum</p>
        </div>
      </Fade>
    </Modal>
  );

  const otherRentPeriodField = (
    <TextField
      id="standard-multiline-flexible"
      label="Rent Period"
      multiline
      rowsMax="2"
      value={rentPeriodText}
      onChange={handleRentPeriodText}
      className={classes.textField}
      margin="normal"
    />
  );

  const formRowBaseRent = (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-multiline-flexible"
        label="Base Rent"
        multiline
        error={isNaN(rentAmount)}
        rowsMax="4"
        value={rentAmount}
        onChange={handleRentAmount}
        className={classes.textField}
        type="number"
        helperText={isNaN(rentAmount) === true ? "Must input a number" : ""}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          )
        }}
      />
      <FormControl component="fieldset" className={classes.rentPeriod}>
        <RadioGroup
          aria-label="position"
          name="position"
          value={rentPeriod}
          onChange={handleRentPeriod}
          row
          marging="large"
        >
          <FormControlLabel
            value="monthly"
            control={<Radio color="primary" />}
            label="monthly"
            labelPlacement="end"
          />

          <FormControlLabel
            value="weekly"
            control={<Radio color="primary" />}
            label="weekly"
            labelPlacement="end"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="other"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
      {rentPeriod === "other" ? otherRentPeriodField : ""}
    </form>
  );

  const rentPeriodFormater =
    rentPeriod === "other" ? rentPeriodText : rentPeriod;

  return (
    <div id="rent">
      <div className={classes.root} id="left">
        <h1>Rent</h1>
        <h3>Will there be a fixed-term?</h3>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {radioButtons}
          </Grid>
          {fixedTerm === "yes" ? FormRowFixedTerm : FormRowFlexibleTerm}
          <Grid item xs={12}>
            {formRowBaseRent}
          </Grid>
        </Grid>
        <br />

        <p>
          Base Rent is the fixed amount your tenant pays {rentPeriodFormater}{" "}
          {""}
          and can include the cost of certain services and utilites. On the next
          page, you will specify what’s included or excluded from
        </p>
        <p onClick={handleOpen}>
          <b>
            Base Rent <InfoIcon />
          </b>
        </p>

        {infoModal}

        <br />
      </div>
    </div>
  );
};

export default Rent;
