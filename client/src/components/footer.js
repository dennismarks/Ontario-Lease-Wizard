import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";

export class Footer extends Component {
  render() {
    // It will only show our buttons if it's the right route for them to appear.
    const { location } = this.props;
    const urls = ["/rent", "/utilities", "/deposits", "/dates", "/payment", "/timeline", "/qa", "/unit",
                  "/parties", "/changes", "/legal", "/daytoday", "/additional"];

    const showButton = location => !urls.includes(location.pathname);

    const previousLink = location => {
      const index = urls.findIndex(url => url === location.pathname);
      if (index === 0) {
        return "/disclaimer";
      }
      if (index === -1) {
        return "/";
      }
      return urls[index - 1];
    };

    const nextLink = location => {
      // Link for next button when on final page
      const index = urls.findIndex(url => url === location.pathname);
      if (index === urls.length - 1) {
        return "/end";
      }
      if (index === -1) {
        return "/";
      }
      return urls[index + 1];
    };

    const progressBarHidden = location => !urls.includes(location.pathname);

    const progressUpdate = location => {
      const index = urls.findIndex(url => url === location.pathname);
      if (index === -1) {
        return 0;
      }
      return (100 / urls.length) * index;
    };

    return (
      <footer>
        <Link to={previousLink(location)}>
          <button
            id="previous"
            className={showButton(location) ? "hidden" : null}
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
          />
          <div className="perc-sign">
            {progressBarHidden(location)
              ? ""
              : Math.floor(progressUpdate(location)) + "%"}
          </div>
        </div>
        <Link to={nextLink(location)}>
          <button id="next" className={showButton(location) ? "hidden" : null}>
            Next <ChevronRight size={24} className="chevronRight" />
          </button>
        </Link>
      </footer>
    );
  }
}

export default withRouter(Footer);
