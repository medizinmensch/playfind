import React from "react";
import Question from "../../../components/Questions/Question/Question";
import Answers from "../../../components/Answers/Answers";

import "./Questionbox.css";

const Questionbox = props => {
  return (
    <div className="Questionbox">
      <Question questionText={props.question.QuestionText} />
      <div className="Answers">
        <Answers
          answers={props.question.Answers}
          onAnswerClick={props.onAnswerClick}
        />
      </div>
    </div>
  );
};

export default Questionbox;
