import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Content from "./components/content";
import Footer from "./components/footer";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

class App extends Component {
  constructor() {
    super();
    // The handler is passed down as a prop method for children to manipulate parent state. Here, the handler is bound to App.js context.
    this.handler = this.handler.bind(this);
  }
  // Leave this for now, as it might be useful for us later once we share states across pages
  state = {};
  // You pass the handler the full state to update each time. This means the child needs to call the current state as an object into a temporary variable, make changes, and then pass in the variable as the update here. For us, here. it just means we pass the state as a property down the component tree.
  handler(update) {
    this.setState(update);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <div className="AppGrid">
            <Navigation />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Content handler={this.handler} state={this.state} />
            </MuiPickersUtilsProvider>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
