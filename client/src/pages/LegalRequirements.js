import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "@material-ui/core/Fade";
import Tooltip from "../util/tooltip";

let utilitiesSvg = require("../assets/legal/utilities.svg"),
  installations = require("../assets/legal/installations.svg"),
  emergencies = require("../assets/legal/emergencies.svg"),
  landlordEntry = require("../assets/legal/landlordEntry.svg"),
  unitDecoration = require("../assets/legal/unitDecoration.svg"),
  conflictResolution = require("../assets/legal/conflictResolution.svg"),
  pets = require("../assets/legal/pets.svg"),
  smoking = require("../assets/legal/smoking.svg");

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

function Item(props) {
  const [expanded, setExpanded] = React.useState(props.title);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ExpansionPanel
      expanded={expanded === props.title}
      onChange={handleChange(props.title)}
    >
      <ExpansionPanelSummary
        style={{ paddingLeft: "0" }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        <div style={{ display: "flex", flexFlow: "left" }}>
          <img style={{ paddingRight: "18px" }} src={props.img}></img>
          <h1 style={{ color: "black", fontSize: "24px" }}>{props.title}</h1>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ color: "black", paddingLeft: "0" }}>
        {props.text}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default function LegalRequirements() {
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

  return (
    <div id="legalReq">
      <h1 style={{ fontSize: "36px", marginBottom: "26px" }}>
        Legal Requirements
      </h1>

      <div className={classes.modalText}>
        <p style={{ marginBottom: "24px" }}>
          In this section, you can explore some common day to day issues. You
          can find more information and resources in our Learn More panel.
        </p>
        <Item
          img={utilitiesSvg}
          title="Utilities"
          text={
            <div>
              <p>
                You may not cut off utilites or services (e.g. water, fuel,
                electricity, heat) to the tenant that you are responsible for
                providing.
              </p>
              <p>
                If your tenant is responsible for paying for certain utilities
                or services, you must tell them how to set up the necessary
                accounts.
              </p>
              <p>
                Potential tenants have the right to know what electricity costs
                have been over the past twelve months.
              </p>
            </div>
          }
        ></Item>
        <Item
          img={installations}
          title="Installations, Maintenance & Repairs"
          text={
            <div>
              <p>
                You are responsible for providing necessary maintenance and
                repairs to the unit, unless the needed maintenance or repairs
                are caused by{" "}
                <span className={classes.learnMore} onClick={handleOpen}>
                  undue damage
                </span>{" "}
                by the tenant.
              </p>
              <p>Tenants must pay for repairs caused by undue damage.</p>
              <p>Your tenant is responsible for keeping the unit clean.</p>
            </div>
          }
        ></Item>
        <Item
          img={emergencies}
          title="Emergencies"
          text={
            <div>
              <p>
                You must provide the tenant with contact information in case of{" "}
                <span className={classes.learnMore} onClick={handleOpen}>
                  emergency.
                </span>
              </p>
              <p>
                If there is an emergency, you do not need to provide notice to
                enter.
              </p>
            </div>
          }
        ></Item>
        <Item
          img={landlordEntry}
          title="Landlord Entry "
          text={
            <div>
              <p>
                You are only permitted to enter the unit for a limited number of
                reasons: making repairs, inspecting the unit, showing the unit,
                and property inspections in case of sale. In general, you must
                provide the tenant with 24 hours{" "}
                <span className={classes.learnMore} onClick={handleOpen}>
                  notice
                </span>{" "}
                before entering the unit, unless it’s an emergency or you have
                the tenant’s permission.
              </p>
            </div>
          }
        ></Item>
        <Item
          img={unitDecoration}
          title="Unit Decoration & Modifications"
          text={
            <div>
              <p>
                The tenant is allowed to decorate the unit but needs your
                permission to any big changes.
                <Tooltip style={{ display: "inline" }}>
                  Info will be added soon.
                </Tooltip>
              </p>
            </div>
          }
        ></Item>
        <Item
          img={conflictResolution}
          title="Conflict Resolution"
          text={
            <div>
              <p>
                In general, if a problem, misunderstanding or disagreement comes
                up, it’s best to discuss the issue with your tenant first.
              </p>
              <p>
                If you’re unable to resolve through discussion, there are lots
                of ways you can{" "}
                <span className={classes.learnMore} onClick={handleOpen}>
                  get help.
                </span>
              </p>
            </div>
          }
        ></Item>
        <Item
          img={pets}
          title="Pets"
          text={
            <div>
              <p>
                You cannot prohibit a tenant from keeping pets. However, if the
                pet causes serious problems for other tenants or damages your
                unit, you may be able to evict the tenant.
              </p>
              <p>
                In some cases, condos may have special rules that ban or limit
                pets.
                <Tooltip style={{ display: "inline" }}>
                  Info will be added soon.
                </Tooltip>
              </p>
            </div>
          }
        ></Item>
        <Item
          img={smoking}
          title="Smoking"
          text={
            <div>
              <div style={{ display: "flex", flexFlow: "left" }}>
                <p style={{ marginRight: "120px", paddingTop: "8px" }}>
                  Do you allow smoking?
                </p>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="position"
                    name="position"
                    value={value}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio color="primary" />}
                      label="No"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <p>
                If you allow smoking in the unit and the tenant’s smoking causes
                seropis problems for other tenants or damages the unit, you may
                be able to evict the tenant.
              </p>
            </div>
          }
        ></Item>
      </div>
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
            <div className={classes.modalText}>
              <p>Information will be added soon.</p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
