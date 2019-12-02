import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ChevronRight } from "react-feather";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  Box,
  Checkbox,
  makeStyles,
  ExpansionPanelSummary
} from "@material-ui/core";

let moneySvg = require("../assets/navigation/money.svg"),
  timelineSvg = require("../assets/navigation/timeline.svg"),
  unitSvg = require("../assets/navigation/unit.svg"),
  partiesSvg = require("../assets/navigation/parties.svg"),
  legalReqSvg = require("../assets/navigation/legalReq.svg"),
  additionalTermsSvg = require("../assets/navigation/additional terms.svg");

const moneySubheaders = [
  { name: "Rent", link: "/rent", pageNumber: 1 },
  { name: "Utilities and Services", link: "/utilities", pageNumber: 2 },
  { name: "Deposits", link: "/deposits", pageNumber: 3 },
  { name: "Move-in Dates", link: "/dates", pageNumber: 4 },
  { name: "Payments", link: "/payment", pageNumber: 5 }
];
const timelineSubheaders = [
  { name: "Timeline", link: "/timeline", pageNumber: 6 },
  { name: "Questions and Answers", link: "/qa", pageNumber: 7 }
];
const unitSubheaders = [];
const partiesSubheaders = [
  { name: "Parties", link: "/parties", pageNumber: 8 },
  { name: "Changes to Parties", link: "/changes", pageNumber: 9 }
];
const legalRequirementsSubheaders = [
  { name: "Legal Requirements", link: "/legal", pageNumber: 10 }
]
const additionalTermsSubheaders = [
  { name: "Additional Terms", link: "/additional", pageNumber: 11 }
];
const finishAndSignSubheaders = [
  { name: "Finish and Sign", link: "/end", pageNumber: 12 }
];

const useStyles = makeStyles(theme => ({
  ExpansionPanel: { margin: "0px" },
  headerImg: { marginTop: "5px" },
  headerName: { marginTop: "5px" },
  ExpansionPanelDetails: { padding: "0px" },
  subheader: { marginLeft: "60px" },
  subheaderName: { color: "black" },
  Checkbox: { padding: "0px" }
}));

function NavigationItem(props) {
  const classes = useStyles();

  const expandHeader = () => {
    return props.details.some(
      subheader => subheader.link === window.location.pathname
    );
  };
  const getCurrentPageNum = () => {
    const page = props.details.find(
      subheader => subheader.link === window.location.pathname
    );
    if (expandHeader() && page) {
      return page.pageNumber;
    } else {
      return 0;
    }
  };

  return (
    <ExpansionPanel
      expanded={expandHeader()}
      className={classes.ExpansionPanel}
    >
      <ExpansionPanelSummary>
        <ChevronRight
          className={"chevronRight " + (expandHeader() ? "active" : null)}
          side={25}
        />
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className={props.Name === "Money" ? classes.headerImg : null}
        />
        <span className={classes.headerName}>{props.name}</span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
        <Box>
          {props.details.map(subheader => (
            <div key={subheader.name} className={classes.subheader}>
              <Checkbox
                checked={subheader.pageNumber < getCurrentPageNum()}
                className={classes.Checkbox}
                color={"primary"}
              />
              <span className={classes.subheaderName}>
                {" "}
                <u>{subheader.name}</u>{" "}
              </span>
            </div>
          ))}
        </Box>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export class navigation extends Component {
  render() {
    const { location } = this.props;
    const hiddenNav = location.pathname === "/" ? "hidden" : "";
    return (
      <nav className={hiddenNav}>
        <Box className="navDiv">
          <h2>Table of Contents</h2>
          <ul>
            <NavigationItem
              imageSrc={moneySvg}
              imageClass="Money"
              imageAlt="Money"
              name="Money"
              details={moneySubheaders}
              optionalImgMargin={"5px"}
            />
            <NavigationItem
              imageSrc={timelineSvg}
              imageClass="Timeline"
              alt="Timeline"
              name="Timeline"
              details={timelineSubheaders}
            />
            <NavigationItem
              imageSrc={unitSvg}
              imageClass="Unit"
              imageAlt="Unit"
              name="Unit"
              details={unitSubheaders}
            />
            <NavigationItem
              imageSrc={partiesSvg}
              imageClass="Parties"
              imageAlt="Parties"
              name="Parties"
              details={partiesSubheaders}
            />
            <NavigationItem
              imageSrc={legalReqSvg}
              imageclass="legalReqSvg"
              imageAlt="legalReqSvg"
              name="Legal Requirements"
              details={additionalTermsSubheaders}
            />
            <NavigationItem
              imageSrc={additionalTermsSvg}
              imageclass="AdditionalTerms"
              imageAlt="Additional Terms"
              name="Additional Terms"
              details={legalRequirementsSubheaders}
            />
            <NavigationItem
              name="Finish and Sign"
              details={finishAndSignSubheaders}
            />
          </ul>
        </Box>
      </nav>
    );
  }
}

export default withRouter(navigation);
