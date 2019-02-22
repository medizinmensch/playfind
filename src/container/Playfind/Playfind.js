import React, { Component } from "react";
import Questionbox from "../../hoc/Questionboxes/Questionbox/Questionbox";
import axios from "axios";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
var data = require("../../assets/musicfy3.json");

class Playfind extends Component {
  state = {
    activeQuestionId: 3
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        //console.log(response);
      });
  }

  onAnswerClick = event => {
    this.setState({
      activeQuestionId: parseInt(
        event.target.attributes.nextquestionid.value
      )
    });
  };

  render() {
    return (
      <>
        <TransitionGroup
          className=""
          key={this.state.activeQuestionId}
          timeout={3000}
          classNames="fade"
        >
          <CSSTransition timeout={3000} classNames="fade">
            <Questionbox
              onAnswerClick={this.onAnswerClick}
              question={data.Questions[this.state.activeQuestionId]}
            />
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

export default Playfind;
