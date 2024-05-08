import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({questions, handleDeleteUpdate}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((item) =>(
        <QuestionItem key={item.id} question={item} handleDeleteUpdate={handleDeleteUpdate}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
