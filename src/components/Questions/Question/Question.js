import React from "react";
import "./Question.css";

const Question = props => {
  return (
    <div className="Question">
      <p>{props.QuestionText}</p>
    </div>
  );
};

export default Question;
