import React from "react";
import CsvParse from "@vtex/react-csv-parse";
import { connect } from "react-redux";
import { fileUploaded } from "../../Reducers/actions";
import styled from "styled-components";

export const keys = [
  { Header: "Invoice Number", accessor: "invoice_number" },
  { Header: "BPAY Biller Code", accessor: "biller_code" },
  { Header: "BPAY CRN", accessor: "crn" },
  { Header: "Due Date", accessor: "due_date" },
  { Header: "Subtotal", accessor: "subtotal" },
  { Header: "GST", accessor: "gst" },
  { Header: "Total", accessor: "total" }

];
const StyledInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #EEE;
    background: linear-gradient(to top, #FFF, #DDD);
    border: thin solid rgba(0,0,0, .5);
    border-radius: .25em;
    box-shadow: inset .25em .25em .25em rgba(255,255,255, .5), inset -.1em -.1em .1em rgba(0,0,0, 0.1);
    cursor: text;
    padding: .25em;
`;
const FileUploadContainer = styled.div`
padding:20px;
`;
class FileUploader extends React.Component {
  render() {
    const accessor = keys.map(x => x.accessor);
    return (
      <CsvParse
        keys={accessor}
        onDataUploaded={this.handleData}
        onError={this.handleError}
        render={onChange => (
          <FileUploadContainer>
            <StyledInput type="file" onChange={onChange} />
          </FileUploadContainer>
        )}
      />
    );
  }
  handleData = data => {
    this.props.fileUploaded(data);
  };
}

function mapStateToProps(state) {
  return {
    ...state.store
  };
}
const mapDispatchToProps = {
  fileUploaded
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader);
