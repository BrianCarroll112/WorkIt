import React, { Component } from 'react';
import FilesBase64 from 'react-file-base64';
import { editUser, getUser, uploadPhotoApi } from '../services/apiHelpers';

class Cv extends Component {
  constructor(props){
  super(props);
  this.state = {
      filepath: ''
    }
  }

    getFiles(filepath) {
    this.setState({
      filepath: filepath
    });
    this.saveCv();
  }

  async handleUpload(){
    await uploadPhotoApi(this.state.filepath.base64);

  }

  async saveCv(){
    const id = await localStorage.getItem('id');
    const token = await localStorage.getItem('token');
    const data = {cv:this.state.filepath.base64};
    await editUser(id, data, token)
  }

  async componentDidMount(){
    const id = await localStorage.getItem('id');
    const token = await localStorage.getItem('token');
    const user = await getUser(id, token)
  }

  render(){
    return(
    <div>
    <embed src={this.props.cv ? this.props.cv : this.state.filepath.base64} width="400" height="300"/>
    <form>
      <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)} />
      <button type='submit' onClick={this.handleUpload}> upload </button>
    </form>
    </div>
    )
  }
};

export default Cv;
