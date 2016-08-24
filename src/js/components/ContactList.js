import React from "react";

import Contact from "./Contact";

export default class ContactList extends React.Component {
  handleSelectedContact(contact){
    this.props.selectedContact(contact);
  }

  render() {
    const Contacts = [
      {id:1, firstName: "BIRBA", lastName:"Manuel"},
      {id:2, firstName: "DALENS", lastName:"Stéphane"}
    ].map((contact, i) => <Contact key={i} contact={contact} selectedContact={this.handleSelectedContact.bind(this)} />); 

    return (
      <ul>
        {Contacts}
      </ul>
    );
  }
}