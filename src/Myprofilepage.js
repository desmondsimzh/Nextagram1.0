import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Input,FormGroup,Label, NavLink} from 'reactstrap';
import {axios} from "axios";


class Myprofilepage extends React.Component {

    componentDidMount() {
        let authToken= localStorage.getItem('userToken');
        axios.get(`https://insta.nextacademy.com/api/v1/images/me`,{headers:{Authorization: `Bearer ${authToken}`}} )
        .then(result => {
          console.log(result)
          // If successful, we do stuffs with 'result'
        //   this.setState({
        //     users: result.data,
        //     isLoading: false,
        //   })
        })  
        .catch(error => {
          // If unsuccessful, we notify users what went wrong
          console.log('ERROR: ', error)
        })
      }

    

    render(){

        return(
        <>
        </>
        )
        }

}

export default Myprofilepage;