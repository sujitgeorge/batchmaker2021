import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FieldToSearch } from "../../Reducers/enums";
import { setSearchAccessor, scanItem } from "../../Reducers/actions";
import { getSearchByFieldName } from "../../Helpers/utilities";

const SearchDesign = styled.input`
margin: auto 0;
padding:10px;
border:none;
height:50%;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
`;
const Button = styled.div`
color:black;
display:flex;
align-items:center;
text-align:center;
background:white;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
padding:10px;
height:50%;
`;
const UL = styled.ul`
${props => (props.shown ? `` : `display:none;`)}
list-style:none;
margin:0;
padding:0;
cursor:pointer;
`;
const Pointer = styled.span`
cursor:pointer;
`;
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.input = React.createRef();
  }
  render() {
    return (
      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={this.handleSubmit}
      >
        <Button onClick={() => this.openThing()}>
          <Pointer>
            {!this.state.isActive
              ? this.props.fieldToSearch === FieldToSearch.SerialNumber
                ? "Serial Number"
                : "Asset Tag"
              : null}
          </Pointer>
          <UL shown={this.state.isActive}>
            <li onClick={() => this.selectItem(FieldToSearch.SerialNumber)}>
              Serial Number
            </li>
            <li onClick={() => this.selectItem(FieldToSearch.AssetTag)}>
              Asset Tag
            </li>
          </UL>
        </Button>
        <SearchDesign placeholder="Search Here" innerRef={this.input} />
      </form>
    );
  }
  openThing = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  selectItem = item => {
    this.props.setSearchAccessor(item);
    this.setState({ isActive: false });
  };
  handleSubmit = event => {
    let input = this.input.current.value;
    let name = getSearchByFieldName(this.props.fieldToSearch);
    this.props.scanItem({ [name]: input });
    this.input.current.value = "";
    event.preventDefault();
  };
}

function mapStateToProps(state) {
  return {
    ...state.store
  };
}
const mapDispatchToProps = {
  setSearchAccessor,
  scanItem
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
