import React from "react";
import { ThemeProvider as TP } from "styled-components";
import theme from "styled-theming";
import { connect } from "react-redux";

class ThemeClass extends React.Component {
  render() {
    return <TP theme={{ mode: this.props.theme }}>{this.props.children}</TP>;
  }
}
function mapStateToProps(state) {
  return {
    theme: state.store.themes.filter(x => x.isActive)[0].name
  };
}

const ThemeProvider = connect(mapStateToProps)(ThemeClass);

export { ThemeProvider };
