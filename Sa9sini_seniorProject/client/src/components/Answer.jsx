import React, { useState } from 'react';
import axios from 'axios';
import { Home ,Pencil ,Trash2} from 'lucide-react';


const Answer = ({ answer, fetchAnswers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newAnswer, setNewAnswer] = useState(answer.Answer);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/api/Answers/update/${answer.id}`, { Answer: newAnswer });
      fetchAnswers();
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating answer:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/Answers/delete/${answer.id}`);
      fetchAnswers();
    } catch (error) {
      console.error("Error deleting answer:", error);
    }
  };

  return (
    <div className="Answer-box">
      {isEditing ? (
        <input
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
      ) : (
        <p>{answer.Answer}</p>
      )}
      

      


      <button onClick={() => setIsEditing(!isEditing)}><Pencil   />
        {isEditing ? " " : " "}
      </button>
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={handleDelete}><Trash2 /></button>
      )}
    </div>
  );
};


export default Answer;
//<p>By: {answer.Users.userName} on {new Date(answer.AnswersDate).toLocaleDateString()}</p>