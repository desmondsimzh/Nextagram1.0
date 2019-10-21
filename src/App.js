import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link, Route, Switch, Redirect} from "react-router-dom";
import UserProfile from "./UserProfile";
import axios from "axios";
import Loginpage from "./Loginpage";
import Myprofilepage from "./Myprofilepage";
import UploadPage from "./UploadPage";

class App extends React.Component {
  state={
    username:"",
    email:"",
    password:"",
    currentUser: {loggedIn:false}
  }
  

  componentDidMount(){
    let user= localStorage.getItem('userData') //"{}" or null	
    if(user === true){
    user= JSON.parse(user)
    this.setState({
    currentUser: {...user, loggedIn:true}
  })
  }
  }

  // ProtectedComponent = () => {
  //   if (this.state.currentUser.loggedIn = true)
  //      return (<Redirect to="/"  />)
   
  //  return <div> My Protected Component </div>
  //  }

  signUpUser =(newUsername, newEmail , newPassword)=>{
    console.log(this.signUpUser);
    axios.post(`https://insta.nextacademy.com/api/v1/users/`, {username: newUsername,email: newEmail,password: newPassword})
    .then(result=>{
    console.log(result)
    let JWT= result.data.auth_token;
    //locastorage stores key and value
    localStorage.setItem('userToken', JWT);
    localStorage.setItem('userData', JSON.stringify(result.data.user));
    window.location = '/login'
    this.setState({
    currentUser:{...result.data.user, loggedIn:true}
    })
    })}

    loginUser =(Loginusername,Loginpassword)=>{
      console.log(this.loginUser);
      //{username: Loginusername,password: Loginpassword} this are the object that needs to be submitted.
      axios.post(`https://insta.nextacademy.com/api/v1/login`, {username: Loginusername,password: Loginpassword})
      .then(result=>{
      console.log(result)
      let JWT= result.data.auth_token;
      //locastorage stores key and value
      localStorage.setItem('userToken', JWT);
      localStorage.setItem('userData', JSON.stringify(result.data.user));
      this.setState({
      currentUser:{...result.data.user, loggedIn:true}
      })
      })
    }
    // myFunction() {
    //   this.history.push('/')
    //  }

  render() {
    //if(isLoading){
    //return <img src={loadingimg} alt="loader" className="d-block mx-auto"/>}
    // if(this.state.currentUser.loggedIn == true){
    //   return <Redirect to= "/login"  /> }

    return (
      
      <div className="container-fluid">
        <NavBar currentUser={this.state.currentUser.loggedIn}></NavBar>
       
        <Route exact
            path="/"
            component={() => {
              return <Homepage />;
            }}
          />
        
          <Route
            path="/users/:id"
            component={props => {
              return <UserProfile {...props} />;
            }}
          />
          {/* <Route path="/myprofile" component={Myprofilepage} /> */}
          <Route path="/login" component={props =>{
            return <Loginpage loginUser={this.loginUser} signUpUser={this.signUpUser} loggedIn={this.state.currentUser.loggedIn} {...props}/>
          }}/>
          {/* <Route 
            path="/upload"
            component={() => {
              return <UploadPage />;
            }}
          /> */}
          {/* <form onSubmit={this.handleSubmit}>
           <input value={this.state.text} onChange={this.handleInput}/>
           <input type="submit" value="Submit"/>
          </form> */}
        {/* <Route path="/user/:id" component={props=>{
          return <UserProfile {...props} />
          }}
          /> */}
      </div>
    );
  }
}

export default App;
