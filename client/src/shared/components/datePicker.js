import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        width: "200px",
    }
})

export const CustomDatePicker = props => {
    const classes = useStyles();
    return (
        <KeyboardDatePicker
            className={classes.root}
            inputVariant="outlined"
            variant="inline"
            margin="normal"
            id={props.label}
            label={props.label}
            format="DD/MM/YYYY"
            value={props.value}
            onChange={props.onChange}
            KeyboardButtonProps={{
                "aria-label": "change date"
            }}
            autoOk={true}
            disabled={props.disabled}
            error={props.error}
            helperText={props.helperText}
        />
    )
}