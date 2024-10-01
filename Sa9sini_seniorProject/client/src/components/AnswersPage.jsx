import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from "../components/Answer";

const AnswersPage = () => {
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  const fetchAnswers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/Answers/getAll');
      setAnswers(response.data);
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3000/api/Answers/add', { Answer: newAnswer, AnswersDate: new Date(), userId: 1, questionId: 1 }); 
      setNewAnswer("");
      fetchAnswers();
    } catch (error) {
      console.error("Error adding answer:", error);
    }
  };

  return (
    <div className="answers-page">
      <h1>Answers</h1>
      <div className="add-answer">
        <input
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={handleAdd}>Add Answer</button>
      </div>
      {answers.map((answer) => (
        <Answer key={answer.id} answer={answer} fetchAnswers={fetchAnswers} />
      ))}
    </div>
  );
};

export default AnswersPage;
