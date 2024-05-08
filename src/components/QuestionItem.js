import React from "react";

function QuestionItem({ question, handleDeleteUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(eId) {
    fetch(`http://localhost:4000/questions/${eId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        console.log( data+ "deleted!")
        handleDeleteUpdate(eId)
      }
        );
  }

  function handleCorrectAnswerChange(eId, newAnswer) {
    // add fetch request
    fetch(`http://localhost:4000/questions/${eId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: newAnswer
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(e) => handleCorrectAnswerChange(id, e.target.value)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDeleteClick(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
