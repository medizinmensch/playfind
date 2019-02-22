import React from "react";
import "./Answer.css";

const Answer = props => {
  return (
    <div className="Answer">
      <button
        type="button"
        nextquestionid={props.nextQuestionId}
        onClick={props.onAnswerClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Answer;
