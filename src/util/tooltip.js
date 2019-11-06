import React, { useState } from "react";
import { makeStyles, Popover, Typography } from "@material-ui/core";
import Info from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  popover: {
    pointerEvents: "none"
  },
  tooltipContent: {
    padding: 10,
    maxWidth: 200
  }
}));

const Tooltip = ({ children, popover, className, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${classes.root} ${className}`} {...rest}>
      <Info
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        id="info"
        open={!!anchorEl}
        anchorEl={anchorEl}
        className={classes.popover}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        {...popover}
      >
        <Typography variant="body1" className={classes.tooltipContent}>
          {children}
        </Typography>
      </Popover>
    </div>
  );
};

export default Tooltip;
