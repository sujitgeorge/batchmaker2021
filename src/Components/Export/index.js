import React from "react";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";
import { setPageTitle } from "../../Reducers/actions";
import { keys } from "../UploadFile/index";
const Button = styled.div`
background:#4172B3;
color: #fff; 
    box-sizing: border-box;
    line-height: 45px;
    overflow: hidden;
    border: 0;
    border-radius: 3px;
    bottom: 0;
    box-shadow: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin: auto;
    outline: none;
    padding: 0;
    right: 0;
    text-align: center;
    display: inline-block
    padding-left: 10px;
    padding-right:10px;
    margin:10px;
    & > a{
      text-decoration:none;
      color:white;
    }
      transition: all 1s ease-in;

`;
class ExportButton extends React.Component {
  render() {
    return this.props.matches.length > 0 ? (
      <Button>
        <CSVLink data={this.props.matches} headers={keys.Headers}>
          Export to CSV
        </CSVLink>
      </Button>
    ) : null;
  }
}
class ExportView extends React.Component {
  componentDidMount() {
    this.props.setPageTitle("Export View");
  }
  render() {
    console.log(this.props.matches);
    return (
      <div>
        {this.props.fileUploaded ? (
          <React.Fragment>
            {this.props.matches.length > 0 ? (
              <Button>
                <CSVLink data={this.props.matches} headers={keys.Headers}>
                  Export to CSV
                </CSVLink>
              </Button>
            ) : null}
            <ReactTable
              data={this.props.matches}
              columns={keys}
              style={{
                height: `${window.innerHeight - 100}px` // This will force the table body to overflow and scroll, since there is not enough room
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>Please Upload a document</React.Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.store
  };
}
const mapDispatchToProps = {
  setPageTitle
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportView);
export const ExportButtonWithSsate = connect(mapStateToProps)(ExportButton);
