import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import useMaxAPI from "../util/useMaxAPI";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to the Ontario Lease Wizard!
          <br />
          {" Let's get started! "}
        </h1>
        <h3>{" Here's an overview of the process "}</h3>
        <ol>
          <li>1. Sign in or Create a new Lease</li>
          <li>2. Review & Add Terms</li>
          <li>3. View & Print</li>
          {/* <Button className="button" id="pdf" onClick={useMaxAPI}>
            Preview PDF
          </Button> */}
        </ol>
        <Link to="/login" className="link">
          <Button className="button" id="getStarted">
            Get Started
          </Button>
        </Link>
      </div>
    );
  }
}

export default Home;
