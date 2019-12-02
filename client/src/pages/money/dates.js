import React, {useState, useEffect, useRef} from "react";
import moment from "moment";
import {
  makeStyles,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  Box,
  Grid
} from "@material-ui/core";
import { DAYS_IN_MONTH } from "../../shared/variables";
import { CustomDatePicker } from "../../shared/components/datePicker"
import {sendData} from "../../shared/functions";
import Title from "../../shared/components/title";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  rentDue: {
    display: "flex"
  }
});

const Dates = props => {
  const classes = useStyles();
  const initialDateStates = {
    moveIn: moment().startOf("day"),
    termStart: moment().add(5, "days"),
    proRatedRentDue: moment().startOf("day")
  };
  const [dates, setDates] = useState(initialDateStates);

  const [isProRated, setIsProRated] = useState(false);
  const [totalProRatedRent, setTotalProRatedRent] = useState(0);
  const data = useRef({});

  useEffect(() => {
    return () => {
      data.current = { dates, isProRated, totalProRatedRent }
    }
  });

  useEffect(() => {
    return () => {
      sendData(data.current);
    }
  }, []);

  const onDateChange = name => selectedMoveInDate => {
    setDates(prevDate => ({ ...prevDate, [name]: selectedMoveInDate }));
    if (name === "moveIn") {
      setProRatedChange();
    }
  };

  const isEarlyMoveIn = () => dates.moveIn.isBefore(dates.termStart, "day");

  const onProRatedChange = event => setIsProRated(event.target.checked);

  const setProRatedChange = () => {
    const monthlyRent = 3000;
    const gapBetweenMoveIn = Math.abs(
      dates.moveIn.diff(dates.termStart, "days")
    );

    const totalRent = (
      (monthlyRent / DAYS_IN_MONTH) *
      gapBetweenMoveIn
    ).toFixed(2);
    setTotalProRatedRent(totalRent);
    return totalRent;
  };

  const compareMoveInAndTermState = () => {
    if (dates.moveIn.isSameOrBefore(dates.termStart, "day")) {
      if (dates.moveIn.isBefore(dates.termStart, "day")) {
        return "before";
      }
      return "same";
    }
    return "after";
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Title>
          Move-in Dates
        </Title>
      </Grid>
      <Grid item xs={8}>
        <Typography>
          Move-in Date: What day does the Tenant plan to move in?
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomDatePicker
          id="date-picker-move-in"
          label="Move-in Date"
          value={dates.moveIn}
          onChange={onDateChange("moveIn")}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          This is {compareMoveInAndTermState()} day of the Start of the
          Fixed-Term Tenacy.
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography>Start of the Fixed-Term Tenacy:</Typography>
      </Grid>
      <Grid item xs={4}>
        {
          <CustomDatePicker
            id="date-picker-tenacy-start"
            label="Start of Tenacy"
            value={dates.termStart}
            onChange={onDateChange("termStart")}
            disabled={true}
          />
        }
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      {isEarlyMoveIn() && (
        <React.Fragment>
          <Grid item xs={8}>
            <Typography>
              Looks like the Tenant plans to move in before the Start of the
              Fixed-Term Tenacy, would you like to have the Tenant pay pro-rated
              rent for that period?
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  value="proRate"
                  checked={isProRated}
                  onChange={onProRatedChange}
                />
              }
              label="Pro-Rated Rent"
              labelPlacement="left"
            />
          </Grid>
        </React.Fragment>
      )}
      {isEarlyMoveIn() && isProRated && (
        <React.Fragment>
          <Grid item xs={12}>
            <Typography>
              <Box fontWeight="fontWeightMedium">
                From {dates.moveIn.format("LL")} to{" "}
                {dates.termStart.format("LL")} the tenant will pay a pro-rated
                amount of ${totalProRatedRent}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>This amount is due on: </Typography>
          </Grid>
          <Grid item xs={4}>
            <CustomDatePicker 
              id="date-picker-pro-rated-due-date"
              label="Pro-rated Rent Due Date"
              value={dates.proRatedRentDue}
              onChange={onDateChange("proRatedRentDue")}
            />
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

export default Dates;
