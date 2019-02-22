import React from "react";
import Answer from "./Answer/Answer";
import "./Answers.css";

const Answers = props => {
  let answers = props.answers.map(a => (
    <Answer
      key={a.id}
      text={a.text}
      nextQuestionId={a.nextQuestionId}
      solutionId={a.SolutionId}
      onAnswerClick={props.onAnswerClick}
    />
  ));

  return <div className="Answers">{answers}</div>;
};

export default Answers;
