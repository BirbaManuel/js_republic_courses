import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Contact extends React.Component {
  handleClick(e){
  	this.props.selectedContact(this.props.contact);
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} >
        {this.props.contact.firstName} {this.props.contact.lastName}
      </li>
    );
  }
}