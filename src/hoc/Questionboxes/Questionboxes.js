import React from "react";
import Questionbox from "../Questionboxes/Questionbox/Questionbox";
import "./Questionboxes.css";

const Questionboxes = props => {
  var classNames = require("classnames");

  let questionboxes = data.questions.map(q => (
    <Questionbox
      key={q.Id}
      question={q}
      answers={q.Answers}
      onAnswerClick={props.onAnswerClick}
    />
  ));

  return <div className="Questionboxes">{questionboxes}</div>;
};

export default Questionboxes;
