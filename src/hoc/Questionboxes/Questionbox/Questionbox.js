import React from "react";
import Question from "../../../components/Questions/Question/Question";
import Answers from "../../../components/Answers/Answers";

const Questionbox = props => {
  // const question = props => {
  //   let getQuestion = props.question.map(q => (
  //     <Questionbox
  //       question={q}
  //       className={classnames(
  //         "Questionbox",
  //         q.Id === props.activeQuestionId ? "active" : "inactive"
  //       )}
  //       onAnswerClick={props.onAnswerClick}
  //     />
  //   ));

  return (
    <div className={props.className}>
        <Question
          key={props.question.Id}
          questionText={props.question.QuestionText}
        />
      <div className="Answers">
        <Answers answers={props.answers} onAnswerClick={props.onAnswerClick} />
      </div>
    </div>
  );
};

export default Questionbox;
