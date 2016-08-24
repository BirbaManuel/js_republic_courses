import React from "react";

export default class ContactDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: null,
    };
  }

  handleChange(){
    this.state.contact = this.props.contact; 
    console.log("fez"); 
  }

  render() {
    return (
      <div>
        Nom : {this.state.contact? this.state.firstName : false}
        <br/>
        Prenom : {this.state.contact? this.state.lastName : false}
        <br/>
        Photo : {this.state.contact? this.state.photo :false}
        <br/>
      </div>
    );
  }
}