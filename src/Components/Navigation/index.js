import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StatefullSettingsButton } from "../Settings/index";
import Search from "../Search/index";
import { TabRow, Tab, Tabs } from "./Theme/styled";
import { ExportButtonWithSsate } from "../Export/index";

class NavigationComponent extends React.Component {
  render() {
    return (
      <TabRow>
        {this.props.fileUploaded ? (
          <Tabs>
            <Tab isActive={this.props.location.pathname === "/"}>
              <Link to="/">Home</Link>
            </Tab>
            <Tab isActive={this.props.location.pathname === "/scanned"}>
              <Link to="/scanned">Scanned</Link>
            </Tab>
            <Tab isActive={this.props.location.pathname === "/diff"}>
              <Link to="/diff">Mis Matched</Link>
            </Tab>
            <Tab isActive={this.props.location.pathname === "/export"}>
              <Link to="/export">Export</Link>
            </Tab>
          </Tabs>
        ) : (
          <Tabs>
            <Tab isActive={this.props.location.pathname === "/"}>
              <Link to="/">Home</Link>
            </Tab>
          </Tabs>
        )}
        {this.props.fileUploaded ? <Search /> : null}
        <ExportButtonWithSsate />
        <StatefullSettingsButton />
      </TabRow>
    );
  }
}
const Navigation = withRouter(NavigationComponent);

function mapStateToProps(state) {
  return {
    ...state.store
  };
}

export default connect(mapStateToProps)(Navigation);
