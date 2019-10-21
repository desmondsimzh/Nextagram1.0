import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
Button, Input,
} from 'reactstrap';
import Loginform from "./Loginform";
import Signupform from "./Signupform"
import styled from "styled-components";

const Styleddiv = styled.div`
  width: 600px;
  margin: 30px auto;
  text-align: left;
  height: 100%;
`;


class Loginpage extends React.Component {
    state={
        islogin:true
    }
    toggleLogin=()=>{
        this.setState({
           islogin: !this.state.islogin //reverse
       })
    }
    render(){
        const{islogin} = this.state;
        return (
        <Styleddiv >
        {islogin ? 
        <Loginform loginUser={this.props.loginUser} toggleLogin={this.toggleLogin} />:
        <Signupform signUpUser={this.props.signUpUser} toggleLogin={this.toggleLogin} />}
        

        </Styleddiv>
            
        )
    }

}

export default Loginpage;