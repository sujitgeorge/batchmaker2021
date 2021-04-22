import React from "react";
import styled from "styled-components";

const Blanket = styled.div`
    display: ${props => (props.show ? `inherit` : `none`)}; 
    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;
const ModalBody = styled.div`
    border-radius:10px;
    background-color: #ffffff;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
    z-index:2;
`;
class Modal extends React.Component {
  state = {
    onBlanket: false,
    inContent: true
  };
  render() {
    return (
      <Blanket
        onMouseEnter={() =>
          this.setState({ onBlanket: true, inContent: false })
        }
        onMouseLeave={() =>
          this.setState({ onBlanket: false, inContent: true })
        }
        show={this.props.active}
        onClick={() => this.hideModal()}
      >
        <ModalBody
          onMouseEnter={() =>
            this.setState({ onBlanket: false, inContent: true })
          }
          onMouseLeave={() =>
            this.setState({ onBlanket: true, inContent: false })
          }
        >
          {this.props.children}
        </ModalBody>
      </Blanket>
    );
  }

  hideModal = () => {
    this.props.clickOut && !this.state.inContent && this.state.onBlanket
      ? this.props.callback()
      : null;
  };
}
export { Modal };
