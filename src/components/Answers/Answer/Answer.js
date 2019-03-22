import React from "react";
import "./Answer.css";
import Button from "react-bootstrap/Button";

const Answer = props => {
  return (
    <div className="Answer">
      <Button
        variant="secondary"
        nextquestionid={props.nextQuestionId}
        solutionid={props.solutionId}
        onClick={props.onAnswerClick}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default Answer;
