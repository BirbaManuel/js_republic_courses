import React from "react";

export default class Header extends React.Component {
  getContactManagerOwner(){
    return "Manu";
  }

  render() {
    return (
      <h1>
        {this.getContactManagerOwner()}
      </h1>
    );
  }
}