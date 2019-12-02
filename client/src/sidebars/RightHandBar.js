import React, { Component } from "react";
import { ListItem } from "./components.js";

export class RightHandBar extends Component {
  render() {
    return (
      <div>
        <h2>Heading 1</h2>
        <ul>
          <ListItem text={"Subheading 1.1"} static={true} />
          <li></li>
        </ul>
        <br />
        <br />
        <br />
        <h2>Heading 2</h2>
        <ul>
          <ListItem
            text={"Subheading 2.1"}
            detail={
              "Based on what you’ve told us, we’ve included all the important milestones in the calendar below. You can customize the dates and reminders and sync with your personal calendar."
            }
          />
          <ListItem text={"Subheading 2.2"} detail={"Will be updated soon."} />
          <ListItem text={"Subheading 2.3"} detail={"Will be updated soon."} />
          <li style={{ height: "200px" }}></li>
        </ul>
      </div>
    );
  }
}

export default RightHandBar;
