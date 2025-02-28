// import css from "./Options.module";

export default function Options({
  onLeaveFeedback,
  onReset,
  textBtns,
  totalFeedback,
}) {
  return (
    <>
      <div>
        {textBtns.map(type => (
          <button key={type} onClick={() => onLeaveFeedback(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}

        {/* <button onClick={() => onLeaveFeedback('good')}>{textBtn[0]}</button>
        <button onClick={() => onLeaveFeedback('neutral')}>{textBtn[1]}</button>
        <button onClick={() => onLeaveFeedback('bad')}>{textBtn[2]}</button> */}
        {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
      </div>
    </>
  );
}
