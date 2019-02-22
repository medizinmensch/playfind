import React, { Component } from "react";
import Questionboxes from "../../hoc/Questionboxes/Questionboxes";
import axios from "axios";

class Playfind extends Component {
  state = {
    activeQuestionId: 3
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      //console.log(response);
    });
  }

  onAnswerClick = event => {
    //    event.target
    console.log("nextquestionid:");

    this.setState({
      activeQuestionId: parseInt(event.target.attributes.nextquestionid.value)
    });
  };

  render() {
    return (
      <>
        <Questionboxes
          onAnswerClick={this.onAnswerClick}
          activeQuestionId={this.state.activeQuestionId}
        />
      </>
    );
  }
}

export default Playfind;
