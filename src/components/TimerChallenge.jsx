import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef();
  const dialogRef = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function startHandler() {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function stopHandler() {
    clearTimeout(timerRef.current);
  }
  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result={"lost"} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? stopHandler : startHandler}>
            {timerStarted ? "Stop Timer" : "Start Challenge"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
