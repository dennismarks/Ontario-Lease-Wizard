import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RightHandBar from "../../sidebars/RightHandBar";
import Title from "../../shared/components/title";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "570px",
    margin: "0 auto"
  },
  paper: {
    fontFamily: "Work Sans",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2)
  },
  h1: {
    fontWeight: "500",
    fontSize: "24px",
    fontStyle: "normal",
    marginBottom: "12px"
  },
  modalText: {
    "& p": {
      marginBottom: "12px",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "24px"
    }
  },
  learnMore: {
    fontWeight: "450",
    textDecoration: "underline",
    cursor: "pointer"
  }
}));

export default function AdditionalTerms() {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const openSubHead12 = () => {
    console.log("Open 1.2");
    setOpen(false);
  };

  const openSubHead21 = () => {
    console.log("Open 2.1");
    setOpen(false);
  };

  return (
    <div id="additionaTerms">
      <Title>Additional Terms</Title>
      <div className={classes.modalText}>
        <p>
          You and your tenant can agree to to additional terms that are specific
          to the unit, which couldn’t be addressed in the rest of the lease.
        </p>
        <p>
          If you find your arranged tenancy is quite straightforward, you can
          choose to finish lease without attaching additional terms.
        </p>
        <p>
          You also have the option of adding a general package of standard legal
          terms that cover most tenancy circumstances found in Ontario.
        </p>
        <p>
          You have the option of building a set of additional terms from
          scratch, specific to your tenancy.
        </p>
        <p>
          Keep in mind, the terms added must comply with the Residential
          Tenancies Act, otherwise they will be consiered void (not valid or
          legally binding) and won’t be enforced. Examples of void and
          unenforceable terms can be found in{" "}
          <span className={classes.learnMore} onClick={handleOpen}>
            learn more
          </span>
          .
        </p>
      </div>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="Continue without additional terms"
          />
          <FormControlLabel
            value="2"
            disabled
            control={<Radio color="primary" />}
            label="Attach general package"
          />
          <FormControlLabel
            value="3"
            disabled
            control={<Radio />}
            label="Build from scratch"
          />
        </RadioGroup>
      </FormControl>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
          <div className={classes.paper}>
            <h1 className={classes.h1}>Illegal Terms</h1>
            <div className={classes.modalText}>
              <p>
                Many old or existing residential leases include terms that are
                actually illegal for being outdated or inconsistent with the
                Residential Tenancies Act.
              </p>
              <p>
                Removing outdated and illegal terms from your lease, reduces
                misunderstandings and the chance of conflict.
              </p>
              <p>
                For a list of commonly used terms that are actually illegal,{" "}
                <span className={classes.learnMore} onClick={openSubHead12}>
                  Learn More
                </span>
              </p>
              <p>
                For a list of commonly used terms that are legal,{" "}
                <span className={classes.learnMore} onClick={openSubHead21}>
                  Learn More
                </span>
              </p>
              <p>
                For more definitions and complete list of terms, click Glossary
                of Terms found in the right hand column.
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
