import React from "react";
import Button from "react-bootstrap/Button";

import classes from "./Solution.css";
import jQuery from "jquery";

const Solution = props => {
  return (
    <div className="Solution">
      <h1>Fertig!</h1>
      <p>
        Wir haben etwas für dich! Wie wäre es mit der{" "}
        <b>"{props.description}"</b>-Playlist?
      </p>
      <div>
        <Button
          className="Button"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bring mich zur Playlist
        </Button>
        <Button
          className="Button"
          variant="secondary"
          onClick={props.resetQuiz}
        >
          Lass mich nochmal suchen
        </Button>
      </div>
    </div>
  );
};

export default Solution;
