import React, { Component } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

// Importing our content pages.
import Home from "../pages/home.js";
import loginProfile from "../pages/login_start.js";
import Disclaimer from "../pages/disclaimer.js";
import Rent from "../pages/money/rent.js";
import Dates from "../pages/money/dates";
import PaymentMethods from "../pages/money/payment";
import Utilities from "../pages/money/utilities_services.js";
import Deposits from "../pages/money/deposits";
import LegalRequirements from "../pages/LegalRequirements";
import Parties from "../pages/parties/parties";
import AdditionalTerms from "../pages/additional terms/AdditionalTerms";
import Timeline from "../pages/timeline";
import End from "../pages/end";

// Importing our sidebars (they change with the route, as the pages do.)
import sidebarHome from "../sidebars/home.js";
import RightHandBar from "../sidebars/RightHandBar.js";

// The Router below changes the page content depending on the current route path. Each page is going to have some way -- whether in the footer or on the page, or even through components/navigation.js -- to push a new path, thus changing the content.

// If a component needs to manipulate App-level state (and that will be often) then you need to throw the Route a render and make an inline function to inject the passing of props and prop functions.
export class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="contentRoute">
          <AnimatedSwitch
            atEnter={{ opacity: 0, offset: 100 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1, offset: 0 }}
            className="switch-wrapper"
            mapStyles={styles => ({
              transform: `translateX(${styles.offset}%)`,
              opacity: `${styles.opacity}`
            })}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={loginProfile} />
            <Route exact path="/disclaimer" component={Disclaimer} />
            <Route exact path="/utilities" component={Utilities} />
            <Route
              exact
              path="/rent"
              render={() => (
                <Rent state={this.props.state} handler={this.props.handler} />
              )}
            />
            <Route
              exact
              path="/dates"
              render={() => (
                <Dates state={this.props.state} handler={this.props.handler} />
              )}
            />
            <Route exact path="/payment" component={PaymentMethods} />
            <Route exact path="/deposits" component={Deposits} />
            <Route exact path="/timeline" component={Timeline} />
            <Route exact path="/legal" component={LegalRequirements} />
            <Route exact path="/parties" component={Parties} />
            <Route exact path="/additional" component={AdditionalTerms} />
            <Route exact path="/end" component={End} />
          </AnimatedSwitch>
        </div>
        <div className="sidebar">
          <Route
            exact
            path={["/", "/login", "/disclaimer", "/end"]}
            component={sidebarHome}
          />
          <Route
            exact
            path={["/rent",
		   "/utilities",
		    "/deposits",
		    "/dates",
		    "/payment",
		    "/timeline",
		    "/qa",
		    "/unit",
		    "/parties",
		    "/changes",
		    "/legal",
		    "/additional"
	    ]}
            path={[
              "/rent",
              "/utilities",
              "/deposits",
              "/dates",
              "/payment",
              "/timeline",
	      "/qa",
	      "/unit",
  	      "/parties",
	      "changes",
	      "/legal",
              "/additional"
            ]}
            component={RightHandBar}
          />
        </div>
      </div>
    );
  }
}

export default Content;
