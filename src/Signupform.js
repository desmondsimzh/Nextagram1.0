import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Input,FormGroup,Label,FormFeedback,} from 'reactstrap';
import axios from "axios";


class Signupform extends React.Component {
    state={
        username:"",
        email:"",
        password:"",
        formErrors:{email:""},
        usernameValid: false,
        passwordValid: true,
        emailValid: false,
    }

    // handleinput=(name,value)=>{
    //     this.setState({
    //     [name]: value   //???
    //    })
    // }

    handleInput = e => {
        let x = { ...e };
        let delay = setTimeout(() => this.handleUsernameCheck(x), 150);
        this.setState({
          [e.target.name]: e.target.value,
          delay
        });
      };
      
      handlePassword= e => {
        this.setState({
          [e.target.name]: e.target.value});
      };

      handleEmail= e => {    
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                  () => { this.validateField(name, value) });
        };        

        validateField=(event, value)=> {
        // event.preventDefault();
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
    
        switch(event) {
            case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        }, this.validateForm);
        }

        validateForm=()=> {
        // event.preventDefault();
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
        } 

    handleUsernameCheck = e => {
    const newUsername = e.target.value;
    if (newUsername.length >= 6) {
        axios.get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
        ).then(response => {
            console.log(response)
        if (response.data.valid) {
            this.setState({
            usernameValid: true
            });
        } else {
            this.setState({
            usernameValid: false
            });
        }
        });
    }
    };

    handleSubmit=(event)=>{
	    event.preventDefault();
	    const {username, email, password} = this.state;
	    this.props.signUpUser(username, email, password);
    }

    render(){
        const {username,email,password,usernameValid,passwordValid, emailValid, formErrors} = this.state;
        console.log(username);
        console.log(usernameValid);
        console.log(passwordValid);
        console.log (emailValid);
        return(
            <>
            <h1>Sign Up</h1>
        <FormGroup>
            <Label for="username">Insert Username</Label>
            {/* <Input className="form-control" type="text" placeholder="Enter your username..." name="username" onChange={(e)=> this.handleinput(e.target.name, e.target.value)} value={username}/> */}
            <Input type="text" name="username" placeholder="Choose a username min 6 characters" value={username} onChange={e => {
             if (this.state.delay) {
            clearTimeout(this.state.delay);
            }
            this.handleInput(e);
            }}
            {...(username.length >= 6
            ? usernameValid
            ? { valid: true }
            : { invalid: true }
            : username.length > 0
            ? { invalid: true }
            : "")}/>
            <FormFeedback {...(username.length > 0 && username.length >= 6 ? usernameValid ? { valid: true } : { invalid: true } : { invalid: true })}>
                {username.length >= 6 ? usernameValid ? "Sweet, this username is available!" : "Sorry, this username is taken!" : "Must be minimum 6 characters"}
            </FormFeedback>
        </FormGroup>
        <FormGroup>
            <Label for="email">Insert Email</Label>
            {/* <Input className="form-control" type="text" placeholder="Enter your email address..." name="email" onChange={(e)=> this.handleEmail(e.target.name, e.target.value)} value={email}/> */}
            <Input type="email" name="email" placeholder="Enter your email address..." value={email} onChange={e => {
            this.handleEmail(e);
            }}
            {...(formErrors.email = emailValid   
            ? { valid: true }
            : { invalid: true }
            )}/>
            <FormFeedback {...(formErrors.email = emailValid ? emailValid ? { valid: true } : { invalid: true }:{ invalid: true })}>
                {formErrors.email = emailValid ? emailValid ? "This is a valid Email address!" : "Please enter a valid Email address!":"Please enter a valid Email address!"}
            </FormFeedback>         
        </FormGroup>
        <FormGroup>
            <Label for="password">Insert Password</Label>
            {/* <Input className="form-control" type="password" placeholder="Enter your password..." name="password" onChange={(e)=> this.handlePassword(e.target.name, e.target.value)} value={password}/> */}
            <Input type="password" name="password" placeholder="Enter your password..." value={password} onChange={e => {
            this.handlePassword(e);
            }}
            {...(password.length >= 6
            ? passwordValid
            ? { valid: true }
            : { invalid: true }
            : password.length > 0
            ? { invalid: true }
            : "")}/>
            <FormFeedback {...(password.length > 0 && password.length >= 6 ? passwordValid ? { valid: true } : { invalid: true } : { invalid: true })}>
                {password.length >= 6 ? passwordValid ? "Nice password!" : "Please enter 6 chracters and above!" : "Please enter 6 chracters and above!"}
            </FormFeedback>            
        </FormGroup>
        <FormGroup className="d-block">
            Already create an account? <a href="#" onClick={this.props.toggleLogin}>Login Now!</a>
        </FormGroup>
            <Button  onClick={this.handleSubmit} color="primary">Sign Up</Button>
            </>
        )
        }

}

export default Signupform;