import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { setPageTitle } from "../../Reducers/actions";

import FileUploader, { keys } from "../UploadFile/index";

class Home extends React.Component {
  componentDidMount() {
    this.props.setPageTitle("Home View");
  }
  render() {
    return (
      <div>
        {this.props.fileUploaded ? (
          <ReactTable
            style={{
              height: `${window.innerHeight - 100}px` // This will force the table body to overflow and scroll, since there is not enough room
            }}
            data={this.props.importedData}
            columns={keys}
          />
        ) : (
          <FileUploader />
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
)(Home);
