import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//Pages
import Home from "./pages/home";
import Model from "./pages/model";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

const App = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            {/* inital={false}: Will disable the fact that animations will occur on a page if the page is refreshed or accessed for the first time trough that direct url */}
            {/* exitBeforeEnter: If set to true, AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered. */}
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/model/:id"
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;

// AnimatePressence: Allows components to animate out when they're removed from the React tree.
// It's required to enable exit animations because React lacks a lifecycle method that:
//  Notifies components when they're going to be unmounted and Allows them to defer that unmounting until after an operation is complete (for instance an animation.)
