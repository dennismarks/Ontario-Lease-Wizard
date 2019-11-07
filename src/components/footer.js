import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";

export class Footer extends Component {
  render() {
    // It will only show our buttons if it's the right route for them to appear.
    const { location } = this.props;
    const previousHidden = location => {
      switch (location.pathname) {
        case "/concerns":
        case "/rent":
        case "/utilities":
        case "/deposits":
        case "/dates":
        case "/payment":
        case "/timeline":
          return false;
        default:
          return true;
      }
    };
    const nextHidden = location => {
      switch (location.pathname) {
        case "/concerns":
        case "/rent":
        case "/utilities":
        case "/deposits":
        case "/dates":
        case "/payment":
        case "/timeline":
          return false;
        default:
          return true;
      }
    };
    const previousLink = location => {
      switch (location.pathname) {
        case "/concerns":
          return "/disclaimer";
        case "/rent":
          return "/concerns";
        case "/utilities":
          return "/rent";
        case "/deposits":
          return "/utilities";
        case "/dates":
          return "/deposits";
        case "/payment":
          return "/dates";
        case "/timeline":
          return "payment";
        default:
          return "/";
      }
    };
    const nextLink = location => {
      switch (location.pathname) {
        case "/concerns":
          return "/rent";
        case "/rent":
          return "utilities";
        case "/utilities":
          return "/deposits";
        case "/deposits":
          return "/dates";
        case "/dates":
          return "/payment";
        case "/payment":
          return "timeline";
        default:
          return "/";
      }
    };
    const progressBarHidden = location => {
      switch (location.pathname) {
        case "/rent":
        case "/utilities":
        case "/deposits":
        case "/dates":
        case "/payment":
        case "/timeline":
          return false;
        default:
          return true;
      }
    };
    const progressUpdate = location => {
      switch (location.pathname) {
        case "/rent":
          return 0;
        case "/utilities":
          return (100 / 12) * 1;
        case "/deposits":
          return (100 / 12) * 2;
        case "/dates":
          return (100 / 12) * 3;
        case "/payment":
          return (100 / 12) * 4;
        case "/timeline":
          return (100 / 12) * 5;
        default:
          return 0;
      }
    };
    return (
      <footer>
        <Link to={previousLink(location)}>
          <button
            id="previous"
            className={previousHidden(location) ? "hidden" : null}
          >
            <ChevronLeft size={24} className="chevronLeft" />
            Previous
          </button>
        </Link>
        <div
          className={progressBarHidden(location) ? "hidden" : "track fade-in"}
        >
          <div
            className="thumb"
            style={{ width: progressUpdate(location) + "%" }}
          ></div>
          <div className="perc-sign">
            {progressBarHidden(location)
              ? ""
              : Math.floor(progressUpdate(location)) + "%"}
          </div>
        </div>
        <Link to={nextLink(location)}>
          <button id="next" className={nextHidden(location) ? "hidden" : null}>
            Next <ChevronRight size={24} className="chevronRight" />
          </button>
        </Link>
      </footer>
    );
  }
}

export default withRouter(Footer);
