import React from 'react';
import UploadImgForm from "./UploadImgForm";

class UploadPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageFile: null
    }
  }

  render(){
    return(
      <UploadImgForm></UploadImgForm>
    )
  }
}

export default UploadPage;