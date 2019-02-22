import React from "react";
import Question from "./Question/Question";
//import "./Question/Question.css"

var classnames = require("classnames");

const Questions = props => {
  var data = require("../../assets/musicfy3.json");
  let getQuestions = data.questions.map(q => (
    <Question
      key={q.Id}
      QuestionText={q.QuestionText}
      Answers={q.Answers}
      //activeQuestionId = {props.activeQuestionId}
      className={classnames(
        "question",
        q.Id === props.activeQuestionId ? "active" : "not-active"
      )}
      onAnswerClick={props.onAnswerClick}
    />
  ));

  console.log(data.questions);
  return <>{getQuestions}</>;
};

export default Questions;



<Question key={q.Id} QuestionText={q.QuestionText} Answers={q.Answers} />;
<Questions
onAnswerClick={this.onAnswerClick}
activeQuestionId={this.state.activeQuestionId}

/>