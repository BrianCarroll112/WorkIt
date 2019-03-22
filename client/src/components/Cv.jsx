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

  async saveCv(){
    const id = await localStorage.getItem('id');
    const token = await localStorage.getItem('token');
    const data = {cv:this.state.filepath.base64};
    const user = await editUser(id, data, token)
  }

  async componentDidMount(){
    const id = await localStorage.getItem('id');
    const token = await localStorage.getItem('token');
    const user = await getUser(id, token)
    this.setState({
      filepath: {
        base64: user.cv
      }
    })
  }

  render(){
    return(
    <div className="pdf">

    <embed className="embedCV" src={this.state.filepath.base64 } width="400" height="600"/>
    <form className="inputCV">
      <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)} />
      <button className="uploadCv" type='submit' onClick={this.handleUpload}> </button>
    </form>
    </div>
    )
  }
};

export default Cv;
