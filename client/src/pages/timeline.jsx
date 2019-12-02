import React from "react";
import Moment from "moment";
import { extendMoment } from 'moment-range';
import {
    makeStyles, Typography, Grid, Checkbox, FormControlLabel, withStyles
} from "@material-ui/core";
import DateRow from "./dateRow"

const moment = extendMoment(Moment);

const useStyles = makeStyles({
    root: {},
    dateInfo: {
        textAlign: "center"
    }
});

const dates = {
    "agreement": moment().subtract(7,"days"),
    "depositReceived": moment().subtract(3, "days"),
    "moveIn": moment().subtract(1, "days"),
    "rentDue": moment(),
    "termEndDate": moment().add(12, 'months')
}

const eventTypes = {
    "fixedTerm": { data: dates, textColor: "white", backgroundColor: "#006689"},
    "importantDates": { data: [
        { date: dates.agreement, text: 'Agreement Date' }, 
        { date: dates.depositReceived, text: 'Deposit Received' }, 
        { date: dates.moveIn, text: "Move-in Date"}], 
        backgroundColor: "#7bf1d4", textColor: "black"}
};

const getRangeDates = (startDate, endDate, frequency) => {
    const start = moment(startDate);
    const end = moment(endDate);

    const range = moment.range(start, end);

    let dates = Array.from(range.by('day', { step: frequency }));
    return dates
    };

const FixedTerm = withStyles({
    root: {
        '&$checked': {
            color: "#006689",
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const MonthToMonth = withStyles({
    root: {
        '&$checked': {
            color: "#184579",
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const ImportantDate = withStyles({
    root: {
        '&$checked': {
            color: "#7bf1d4",
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const ProRated = withStyles({
    root: {
        '&$checked': {
            color: "#1485b1",
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


const Timeline = props => {
    const classes = useStyles();
    const rentDueDates = getRangeDates(dates.rentDue, dates.termEndDate, 30); //Replace 30 with period
    const { importantDates, fixedTerm } =  eventTypes;
    
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h1" color="primary">
                    Timeline
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Based on what you've told us, we've included all the important milestones in the calender below. You can customize the dates and reminders and sync with your personal calender.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography color="primary">
                    Legend
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel disabled control={<FixedTerm checked/>} label="Fixed Term" />
                <FormControlLabel disabled control={<MonthToMonth checked/>} label="month-to-month" />
                <FormControlLabel disabled control={<ImportantDate checked/>} label="Important Dates" />
                <FormControlLabel disabled control={<ProRated checked/>} label="Pro-Rated" />
            </Grid>
            {importantDates.data.map((importantDate, i) => (
                <Grid item xs={12}>
                    {<DateRow key={i} date={importantDate.date} text={importantDate.text} customStyle={{ "color": importantDates.textColor, "backgroundColor": importantDates.backgroundColor}}/>}
                </Grid>
            ))}
            {rentDueDates.map((rentDate, i) => (
                <Grid item xs={12}>
                    {<DateRow key={i} date={rentDate} text='Rent Payment Due' customStyle={{ "color": fixedTerm.textColor, "backgroundColor": fixedTerm.backgroundColor }}/>}
                </Grid>
            ))}
        </Grid>
    )

}

export default Timeline;
