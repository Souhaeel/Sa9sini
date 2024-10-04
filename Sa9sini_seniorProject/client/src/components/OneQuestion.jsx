import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from "../components/Answer";
import { Home } from 'lucide-react';
import {useLocation,useNavigate } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import logo from '../components/css/logo.png';
import '../App.css'

const AnswersPage = () => {
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  const nav = useNavigate();
  const location = useLocation()
  const quest = location.state
console.log(quest);


  const fetchAnswers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/Answers/getAll');
      // const sortedResponse = response.data.sort((a, b) => b.id - a.id);
      const filteredResponse = response.data.filter((answer)=>{
          return answer.questionId === quest.id
      })
      console.log(filteredResponse);
      
      setAnswers(filteredResponse);


    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  const handleAdd = async () => {
    if (!newAnswer.trim()){
      alert("ADD ANSWER")
    }
    try {
      await axios.post('http://localhost:3000/api/Answers/add', { Answer: newAnswer, AnswersDate: new Date(),userName: "user name", userId: 1, questionId: quest.id });
      setNewAnswer("");
      fetchAnswers();
    } catch (error) {
      console.error("Error adding answer:", error);
    }
  };
  
  
  return (
    <div>
      <div>
        <nav className="bg-white shadow-md" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '1000' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div              className="flex justify-between h-16 items-center">
              <img
               onClick={() => { nav('/') }}
              src={logo} alt="Logo" className="w-15 h-12 rounded-full" />

              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign In
                </button>
                <button
                  onClick={() => { nav('/ProfilePage') }}
                  className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <User className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                  My Profile
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div   >
      <div 
      style={{ marginTop: '80px' }}
      className="answers-page">

        <div className='question-box' style={{border:'1px solidd #ddd', padding: '20px', borderRadius:'8px',marginBottom:'20px'}}>

        <h1>{quest.Question}</h1>
        <div className="add-answer">
          <input
            type="text"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
        
          />
          <button onClick={handleAdd}>Add Answer</button>
        </div>
        </div >
        <div className='answers-container' style ={{maxHeight: '400px', overflowY: 'auto', marginTop: '20px', padding: '10 px',border:'1px solid #ccc', borderRadius:'5px' }}>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} fetchAnswers={fetchAnswers} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AnswersPage;