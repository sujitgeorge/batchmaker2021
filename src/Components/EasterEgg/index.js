import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Modal } from "../Modal/index";
import { closeEasterEgg } from "../../Reducers/actions";
import axios from "axios";

class EasterEggs extends React.Component {
  state = {
    img: null
  };
  componentWillReceiveProps() {
    this.props.isEasterEgg ? this.doGet() : null;
  }
  doGet() {
    axios
      .get(`https://aws.random.cat/meow`)
      .then(response => {
        const data = response.data.file;
        this.setState({ img: `${data}` });
      })
      .catch(function(error) {});
  }
  render() {
    return (
      <Modal
        active={this.props.isEasterEgg}
        clickOut={true}
        callback={() => this.props.closeEasterEgg()}
      >
        <img style={{ width: 100 + "%" }} src={this.state.img} />
      </Modal>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.store
  };
}
const mapDispatchToProps = {
  closeEasterEgg
};
const EasterEggContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EasterEggs);

export { EasterEggContainer };
