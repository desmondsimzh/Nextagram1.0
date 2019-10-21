import React from 'react';
import './App.css';
import axios from 'axios';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, } from 'reactstrap';

const UserImgResize= styled.img`
width:100%;
height: 250px ;
`;




class UserImage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      imgcontainer: []
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



componentDidMount() {
  // performing a GET request
  axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.childId}`)
  .then(result => {
      console.log(result)
    console.log(result.data)
    // If successful, we do stuffs with 'result'
    this.setState({
      imgcontainer: result.data
    })
  })
  .catch(error => {
    // If unsuccessful, we notify users what went wrong
    console.log('ERROR: ', error)
  })
}

render(){
  //if(isLoading){
    //return <img src={loadingimg} alt="loader" className="d-block mx-auto"/>}
  
  return (
    <>
        {
          this.state.imgcontainer.map((imgid) =>(
        <Col className="col-sm-4 mb-2" key= {imgid} ><UserImgResize className="img-fluid feed-picture" src={imgid} alt="userImage"/></Col>
          ))
        }
        
    </>
  )
}
}

export default UserImage;
