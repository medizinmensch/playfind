import React from "react";
import Questionbox from "../Questionboxes/Questionbox/Questionbox";

const Questionboxes = props => {
  var classNames = require("classnames");
  var data = require("../../assets/musicfy3.json");
  let questionboxes = data.questions.map(q => (
    <Questionbox
    key={q.Id}
      question={q}
      className={classNames(
        "Questionbox",
        q.Id === props.activeQuestionId ? "active" : "inactive"
      )}
      answers={q.Answers}
      onAnswerClick={props.onAnswerClick}
    />
  ));

  return <div className="Questionboxes">{questionboxes}</div>;
};

export default Questionboxes;
