import React from "react";

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={index}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
