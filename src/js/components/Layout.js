import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedContact: null,
      contactDetails : false,
    };
  }

  handleSelectedContact(contact){
    this.state.selectedContact = contact; 
    console.log(this.state.selectedContact);
  }

  afficheContact(contact){
  }

  render() {

    return (
      <div>
        <Header />
        <ContactList selectedContact={this.handleSelectedContact.bind(this)} />
        <ContactDetails selectedContact={this.handleSelectedContact.bind(this)} contact={this.state.selectedContact} />
        <Footer />
      </div>
    );
  }
}