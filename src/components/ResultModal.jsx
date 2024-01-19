import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function (
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialogRef = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You lost 💀</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>
          {formattedRemainingTime} second{formattedRemainingTime > 1 ? "s" : ""}{" "}
          left.
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
