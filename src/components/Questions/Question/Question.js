import React from "react";
import "./Question.css";

const Question = props => {
  return (
    <div className="Question">
      <p>{props.questionText}</p>
    </div>
  );
};

export default Question;
