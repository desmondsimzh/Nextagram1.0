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


class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }





render(){
  //if(isLoading){
    //return <img src={loadingimg} alt="loader" className="d-block mx-auto"/>}

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Nextagram</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Input type="text" name="text" id="searchBar" placeholder="Type Username" />
            </NavItem>
            <NavItem>
              <button type="button" className="btn btn-outline-primary">Search</button>
            </NavItem>
            <NavItem>
              <NavLink href="/">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`/myprofile`}>{this.props.currentUser === true ? 'My Profile'  : "" }</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href={`/`}>
              {this.props.currentUser == true ? 'Feed'  : "" }</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`/`}>
              {this.props.currentUser == true ? 'Edit User Profile'  : "" }</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href={`/login`}>
              {this.props.currentUser === true ? 'Logout'  : 'Login' }</NavLink>
            </NavItem>
            <NavItem>
            <button type="button" className="btn btn-outline-secondary">Upload</button>
            {/* <button type="button" className="btn btn-outline-secondary">{this.props.currentUser === true ? 'Upload'  : '' }</button> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </>
      
  )
}
}

export default NavBar;
