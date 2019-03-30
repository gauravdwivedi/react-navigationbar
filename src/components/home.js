import React, { Component } from "react";
import ReactDOM from "react-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <p>This dude is {this.props.contacts.name}</p>
        <p>His Phone Number is {this.props.contacts.phone}</p>
        <div>
          <h4>hobbies</h4>
          <ul>
            {this.props.contacts.hobbies.map(hobby => (
              <li>{hobby}</li>
            ))}
          </ul>
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
