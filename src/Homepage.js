import React from 'react';
import './App.css';
import axios from 'axios';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import loadingimg from "./Pacman-0.8s-200px.svg";
//import UserImage from "./UserImage";
import {
Button, Row, Col, } from 'reactstrap';
import UserImage from './UserImage';

const ImgResize= styled.img`
padding: .25rem;
border: 1px solid white;
max-width: 100%;
border-radius: 100%;
`;


// `;
//const UsersInfo= styled.row``


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      users: [],
      isLoading: true,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



componentDidMount() {
  // performing a GET request
  axios.get('https://insta.nextacademy.com/api/v1/users')
  .then(result => {
    //console.log(result.data)
    // If successful, we do stuffs with 'result'
    this.setState({
      users: result.data,
      isLoading: false,
    })
  })
  .catch(error => {
    // If unsuccessful, we notify users what went wrong
    //console.log('ERROR: ', error)
  })
}

render(){
  if(this.state.isLoading){
    return <img src={loadingimg} alt="loader" className="d-block mx-auto"/>}
  
  return (
    <div>
      
        {
          this.state.users.map((user,index) =>(
            <Row className="row border  mb-5 rounded pt-3 pb-3 user-index-feature" key={index}><Col className="col-sm-2 mb-5"><a className="font-weight-bold" to="">{user.username}</a> 
            <br></br><ImgResize className="mb-5" src={user.profileImage} alt="profileImage"/><Button href={`/users/${user.id}`} className="btn-block" color="primary">See More</Button></Col>
          <Col><Row><UserImage className="mb-5" childId={user.id}></UserImage></Row></Col>
          
            </Row>
            
          ))
        }
          
      
    </div>
  )
}
}

export default Homepage;
