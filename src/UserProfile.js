import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, } from 'reactstrap';

class UserProfile extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.match.params.id}`)

        .then(result => {
            console.log(result)
          console.log(result.data)
          // If successful, we do stuffs with 'result'
          this.setState({
          })
        })
    }
    render(){
        return(
        <div className="container-fluid">
            <Row className="mb-5">
                <Col className="col-sm-3"></Col>
                <Col className="col-6"></Col>
                <Col className="col-sm-3"></Col>
                </Row>
                <Row></Row>
        </div>
        );
    }
}

export default UserProfile