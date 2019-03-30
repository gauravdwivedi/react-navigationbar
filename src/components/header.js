import React, { Component } from "react";
import ReactDOM from "react-dom";

class header extends Component {
  constructor(props) {
    super();
    this.state = {
      age: props.age,
      status: 0
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }
  render() {
    return (
      <div>
        <p>In a new Component!</p>
        <p>My Name is {this.props.name}</p>
        <p> Age is {this.state.age}</p>
        <p>Status : {this.state.status}</p>
        <hr />
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">
          Make me Older
        </button>
      </div>
    );
  }
}

export default header;
