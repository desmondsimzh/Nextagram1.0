// import React from 'react';
// import {FormGroup, Button, Input, FormText, Form } from 'reactstrap';

// class UploadImgForm extends React.Component {

//     handleSubmitFile = e => {
//         // Prevent the default behaviour of the form submitting
//         e.preventDefault();
//         // Authorization of the user
//         let JWT = localStorage.getItem("JWT");
//         // Formdata object to hold the image file to send to the server
//         let formData = new FormData();
//         // Append the key:value pair to the formData object
//         formData.append("image", this.state.imageFile);
        
//         axios.post("https://insta.nextacademy.com/api/v1/images/", formData, {headers: { Authorization: `Bearer ${JWT}` }
//           })
//           .then(response => {
//             if (response.data.success) {
//               this.setState({
//                 message: "Image Uploaded Successfully!",
//                 previewImage: null,
//                 imageFile: null
//               });
//             }
//           })
//           .catch(error => {
//             console.log(error.response);
//           });
//       };    

//     handleFile = e => {
//         this.setState({
//           imageFile: e.target.files[0]
//         });
//       };

  

//   render(){
//     return(
//         <Form
//          onSubmit={
//             // The function to call on submit goes here
//             this.handleSubmitFile
//           }
//         >
//         <FormGroup>
//         <Input
//           type="file"
//           name="image-file"
//           onChange={
//             // The function to call when you have selected a file will be called here
//             this.handleFile
//             }
//         />
//         <FormText color="muted">
//           Make sure the image being uploaded is a supported format.
//         </FormText>
//       </FormGroup>
//       <Button type="submit" color="primary">
//         Upload
//       </Button>
//       </Form>
//     )
//   }
// }

// export default UploadImgForm;