import React from "react";
import ReactDOM from "react-dom";
import styled, { injectGlobal } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./Reducers/index";

import Navigation from "./Components/Navigation/index";
import Header from "./Components/Header/index";
import HomeComponent from "./Components/Home/";

import { ThemeProvider } from "./Helpers/Theme/themeProvider";

import ExportView from "./Components/Export/index";

import { NotificationsContainer } from "./Components/Notifications/index";

import { StatefullSettings } from "./Components/Settings/index";
const store = createStore(rootReducer, composeWithDevTools());
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');
 html, body, #root{
   font-family: 'Roboto', sans-serif;
   width:100%;
   height:100%;
   margin:0;
   padding:0;
   }`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div>
            <Header />
            <Navigation />
            <Switch>
              <Route path="/" exact={true} component={HomeComponent} />
              <Route path="/export" exact={true} component={ExportView} />
              <Route
                path="*"
                component={() => <div>Uh-Oh the page can not be found</div>}
              />
            </Switch>
            <NotificationsContainer />
            <StatefullSettings />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//https://nayvii.com/form-css/advanced-search-form-in-css-and-jquery-codyhouse-example-fea/
