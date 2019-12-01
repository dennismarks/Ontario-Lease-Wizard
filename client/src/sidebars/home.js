import React, { Component } from "react";
import { ListItem } from "../sidebars/components.js";

export class sidebarHome extends Component {
  render() {
    return (
      <div>
        <h2>Learn More</h2>
        <ul>
          <ListItem text={"Key Deposits"} detail={"Here's more information."} />
          <ListItem text={"Can I trust it?"} />
          <ListItem text={"Why standard terms?"} />
          <ListItem text={"Is my personal information safe?"} />
          <ListItem text={"Why should I use it?"} />
        </ul>
      </div>
    );
  }
}

export default sidebarHome;
