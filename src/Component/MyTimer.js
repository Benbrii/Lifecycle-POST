import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0
    };
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      });
    }, 1000);
  }

  componentWillMount() {
    console.log("La création du composant va avoir lieu");
  }

  componentDidMount() {
    console.log("La création du composant a eu lieu");
  }

  componentWillUpdate() {
    console.log("Le composant va se mettre à jour");
  }

  componentDidUpdate() {
    console.log("Le composant a été mis à jour");
  }

  render() {
    return <div>Timer: {this.state.timer}</div>;
  }
}

export default Timer;