import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Input,FormGroup,Label, NavLink} from 'reactstrap';


class Loginform extends React.Component {
    state={
        username:"",
        password:""
    }

    handleinput=(name,value)=>{
        this.setState({
        [name]: value   //???
       })
    }
    handleSubmit=(event)=>{
	    event.preventDefault();
	    const {username, password} = this.state;
	    this.props.loginUser(username, password);
    }


    

    render(){
        const {username,password} = this.state
        return(
        <>
        <h1>Login</h1>
        <FormGroup>
        <Label for="username">Username</Label>
        <Input className="form-control" type="text" placeholder="Enter your username..." name="username" onChange={(e)=> this.handleinput(e.target.name, e.target.value)} value={username}/>
        </FormGroup>
        <FormGroup>
        <Label for="password">Password</Label>
        <Input className="form-control" type="password" placeholder="Enter your password..." name="password" onChange={(e)=> this.handleinput(e.target.name, e.target.value)} value={password}/>
        </FormGroup>
        <FormGroup className="d-block">
        No account? <a href="#" onClick={this.props.toggleLogin}>Sign Up Now!</a>
        </FormGroup>
        <Button onClick={this.handleSubmit}color="primary">Login</Button>
        </>
        )
        }

}

export default Loginform;