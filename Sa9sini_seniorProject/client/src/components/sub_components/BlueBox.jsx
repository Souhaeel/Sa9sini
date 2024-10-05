import React from 'react';

export default function TopQuestions() {
  const questions = [
    "What are language?",
    "How does globally?",
    "What are health?"
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        Frequently Asked
      </h2>
      <ul className="space-y-1 text-sm">
        {questions.map((question, index) => (
          <li key={index} className="border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              {question}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
