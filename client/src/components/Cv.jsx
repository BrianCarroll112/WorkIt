import React, { Component } from 'react';
import { Dropzone, useDropzone} from 'react-dropzone';
import FilesBase64 from 'react-file-base64';
import { uploadPhotoApi } from '../services/apiHelpers';
import { Document, Page } from 'react-pdf';

class Cv extends Component {
  constructor(){
  super();
  this.state = {
      filepath: '',
      url:'',
      numPages: null,
      pageNumber: 1,
    }
  }

    getFiles(filepath) {
    this.setState({
      filepath: filepath,
    });
    console.log(filepath);
  }



  async handleUpload(){
    await uploadPhotoApi(this.state.filepath.base64);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }



  render(){
    const { pageNumber, numPages } = this.state

    return(
    <div>
    <Document
    file={this.state.filepath.base64}
    onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}>
    <Page pageNumber={pageNumber} />
    </Document>
    <p> Page {pageNumber} of {numPages} </p>
    <form>
      <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)} />
      <button type='submit' onClick={this.handleUpload}> upload </button>
    </form>
    </div>
    )
  }
};

export default Cv;
