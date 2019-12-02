import React from 'react';
import { makeStyles, Divider, Grid, Typography, Chip, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    dateInfo: {
        textAlign: "center"
    },
    chip: props => ({
        justifyContent: "left",
        width: "80%",
        backgroundColor: props.backgroundColor,
        color: props.color
    }),
    label: {
      margin: "0 auto"
    },
    avatar: props => ({
        backgroundColor: props.backgroundColor,
        color: props.color,
    })
}));

const DateRow = props => {
    const classes = useStyles(props.customStyle);

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={3}>
                <Chip 
                    className={classes.chip}
                    classes={{label: classes.label}}
                    variant="outlined"
                    label={props.date.format("MMM, ddd")}
                    avatar={<Avatar className={classes.avatar}>{props.date.format("D")}</Avatar>}
                />
            </Grid>
            <Grid item xs={8}>
                <Typography className={classes.dateInfo}>
                    {props.text}
                </Typography>
            </Grid>
        </div>
    );
}

export default DateRow;
