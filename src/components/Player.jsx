import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function changeHandler(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function clickHandler() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"}!</h2>
      <p>
        <input type="text" onChange={changeHandler} value={playerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
