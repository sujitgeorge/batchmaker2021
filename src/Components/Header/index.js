import React from "react";
import { connect } from "react-redux";
import { HeaderDesign, Title } from "./Theme/styled";

class Header extends React.Component {
  render() {
    const title = "BPAY Batchmaker";
    return (
      <HeaderDesign>
        <Title>{`${
          this.props.currentPageTitle !== ""
            ? `${title} - ${this.props.currentPageTitle}`
            : `${title}`
        }`}</Title>
      </HeaderDesign>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.store
  };
}
export default connect(mapStateToProps)(Header);
