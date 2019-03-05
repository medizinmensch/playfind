import React, { Component } from "react";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
// import axios from "axios";
import "./Playfind.css"

import Questionbox from "../../hoc/Questionboxes/Questionbox/Questionbox";
import Solution from "../../components/Solution/Solution";
var data = require("../../assets/musicfy_real.json");

var eShowMode = {
  start: 1,
  questions: 2,
  solution: 3
};

class Playfind extends Component {
  state = {
    showMode: eShowMode.questions,
    nextBoxId: 1
  };

  componentDidMount() {
    /*axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        //console.log(response);
      });*/
  }

  onAnswerClick = event => {
    const nextQuestionId = parseInt(
      event.target.attributes.nextquestionid.value
    );
    const solutionId = parseInt(
      event.target.attributes.solutionId.value
    );
    console.log(solutionId);
    console.log(nextQuestionId);

    if (nextQuestionId !== 0) {
      this.setState({
        showMode: eShowMode.questions,
        nextBoxId: nextQuestionId
      });
    } else if (solutionId !== 0) {
      this.setState({
        showMode: eShowMode.solution,
        nextBoxId: solutionId
      });
    } else {
      console.error("Database error: nextQuestionId is unvalid");
    }

    // if (solutionId !== 0) {
    //   renderbox = <>{data.Solutions[solutionId]}</>;
    // }

    // if (nextQuestionId !== 0) {
    //   renderbox = (
    //     <Questionbox
    //       onAnswerClick={this.onAnswerClick}
    //       question={data.Questions[this.state.nextBoxId]}
    //       showMode={this.state.showMode}
    //     />
    //   );
    // }

    // const nextQuestionId = parseInt(
    //   event.target.attributes.nextquestionid.value
    // );
  };

  onResetClick = event => {
    this.setState({
      nextBoxId: 1
    });
  };

  render() {
    let nextBox = <p>You should not see this.</p>;

    if (this.state.showMode === eShowMode.questions) {
      nextBox = (
        <Questionbox
          onAnswerClick={this.onAnswerClick}
          question={data.Questions[this.state.nextBoxId]}
          showMode={this.state.showMode}
          resetQuiz={this.onResetClick}
        />
      );
    } else if (this.state.showMode === eShowMode.solution) {
      nextBox = (
        <Solution
          description={
            data.Solutions[this.state.nextBoxId].Description
          }
          url={data.Solutions[this.state.nextBoxId].Url}
        />
      );
    }

    return (
      <>
        {/* <Solution /> */}
        <div className="backdrop">
          <TransitionGroup
            className=""
            key={this.state.nextBoxId}
            timeout={3000}
            classNames="fade"
          >
            <CSSTransition timeout={3000} classNames="fade">
              {nextBox}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </>
    );
  }
}

export default Playfind;
