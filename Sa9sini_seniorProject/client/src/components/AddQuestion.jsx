import React, { useState } from 'react';
import { Send, User } from 'lucide-react';

export default function AddQuestion({ onSubmit, avatarUrl, name }) {
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('General');


    const handleAddingQuestion = () => {
        const addData = async () => {
            try {
                const res = await axios.post('http://localhost:3000/api/Questions/add', {
                    Question: question,
                    category: 'anything for now',
                    QuestionDate: new Date(),
                    Like: 0,
                    userId: 0
                });
            } catch (err) {
                console.log('this error', err);
            }
        }
        addData()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            handleAddingQuestion()
            setQuestion('');
        }
    };



    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-2xl mx-auto my-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <User className="text-gray-400" size={20} />
                        </div>
                    )}
                </div>
                <input
                    type="text"
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={`What's your question, ${name}?`}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                    disabled={!question.trim()}
                >
                    <Send size={20} />
                    <span className="sr-only">Submit</span>
                </button>
            </form>
        </div>
    );
}