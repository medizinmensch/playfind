import React from "react";

const Solution = props => {
  return (
    <>
      <h1>Fertig!</h1>
      <p>
        Okay, wir haben etwas für dich! Wie wäre es mit der{" "}
        {props.description}-Playlist?
      </p>
      <a href={props.url}>Click me!</a>
      <button type="button" onClick={props.resetQuiz}>Start over</button>
    </>
  );
};

export default Solution;
