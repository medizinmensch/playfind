import React, { Component } from "react";
// import axios from "axios";
import "./Playfind.css";

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
    currentBoxId: 1
  };

  // state = { start values
  //   showMode: eShowMode.questions,
  //   currentBoxId: 1
  // };

  componentDidMount() {}

  onAnswerClick = event => {
    console.log(event.target.attributes);

    const nextQuestionId = +event.target.attributes.nextquestionid
      .value;
    const solutionId = +event.target.attributes.solutionId.value;
    console.log(solutionId);

    if (nextQuestionId !== 0) {
      this.setState({
        showMode: eShowMode.questions,
        currentBoxId: nextQuestionId
      });
    } else if (solutionId !== 0) {
      this.setState({
        showMode: eShowMode.solution,
        currentBoxId: solutionId
      });
    } else {
      console.error("Database error: nextQuestionId is unvalid");
    }
    console.log(this.state);
    
  };

  onResetClick = event => {
    console.log("triggered");

    this.setState({
      showMode: eShowMode.questions,
      currentBoxId: 1
    });

    this.forceUpdate();
  };

  render() {
    let currentBox = <p>Error</p>;

    if (this.state.showMode === eShowMode.questions) {
      const boxContent = data.Questions.find(
        i => i.Id === this.state.currentBoxId
      );

      currentBox = (
        <>
          <Questionbox
            onAnswerClick={this.onAnswerClick}
            question={boxContent}
            resetQuiz={this.onResetClick}
          />
        </>
      );
    } else if (this.state.showMode === eShowMode.solution) {
      const boxContent = data.Solutions.find(
        i => (i.Id === this.state.currentBoxId)
      );
      currentBox = (
        <Solution
          description={boxContent.Description}
          url={boxContent.Url}
          resetQuiz={this.onResetClick}
        />
      );
    }

    return (
      <>
        {/* <Solution /> */}
        <div className="backdrop">{currentBox}</div>
      </>
    );
  }
}

export default Playfind;
