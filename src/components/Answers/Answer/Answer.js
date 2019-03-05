import React from "react";
import "./Answer.css";

const Answer = props => {
  return (
    <div className="Answer">
      <button
        type="button"
        nextquestionId={props.nextQuestionId}
        solutionId={props.solutionId}
        onClick={props.onAnswerClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Answer;
