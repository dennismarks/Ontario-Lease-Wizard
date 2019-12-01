import React, { Component } from "react";
import { ChevronRight } from "react-feather";

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      static: props.static
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    let divStyle = {
      hidden: {
        visibility: "hidden",
        height: 0,
        opacity: 0
      },
      visible: {
        visibility: "visible",
        height: "auto",
        opacity: 1,
        fontWeight: "300",
        fontStyle: "normal",
        fontSize: "16px"
      }
    };
    return (
      <li
        className={this.state.active ? "active" : null}
        onClick={this.toggleClass}
        style={
          this.state.static
            ? { paddingLeft: "26px", fontWeight: "450", fontSize: "17px" }
            : { paddingLeft: "18px", fontWeight: "normal", fontSize: "17px" }
        }
      >
        <ChevronRight
          className={"chevronRight " + (this.state.active ? "active" : null)}
          size={this.state.static ? 0 : 25}
        />
        <span style={this.state.static ? { cursor: "default" } : null}>
          {this.props.text}
        </span>
        <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
          {this.props.detail}
        </div>
      </li>
    );
  }
}

export default ListItem;
