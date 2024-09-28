import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, User } from 'lucide-react';
import axios from 'axios';
import Footer from './sub_components/Footer';
import AddQuestion from './sub_components/AddQuestion';

export default function MainPage() {
    const [questions, setQuestions] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [likee, seLikee] = useState(0)

    let avatarPic = 'https://i.pinimg.com/236x/53/a3/89/53a3893001f4f0a310c6ce792fe6598a.jpg';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/Questions/getAll');
                const sortedQuestions = res.data.sort((a, b) => b.id - a.id);
                setQuestions(sortedQuestions);
            } catch (err) {
                console.log('this error', err);
            }
        };

        fetchData();
    }, []);

    const handleNewQuestion = (newQuestion) => {
        setQuestions((questions) => [newQuestion, ...questions]);
    };

    const handleLike = async (question, add) => {
        try {
            const newLikeCount = add ? question.like + 1 : question.like - 1;
            await axios.put(`http://localhost:3000/api/Questions/update/${question.id}`, { like: newLikeCount });
            console.log(add ? 'liked' : 'unliked');

            setQuestions((prevQuestions) =>
                prevQuestions.map((q) =>
                    q.id === question.id ? { ...q, like: newLikeCount, isLiked: add } : q
                )
            );
        } catch (err) {
            console.log('this error', err);
        }
    };

    const handleDelete = async (element) => {
        const check = window.confirm('Are you sure? This might be irreplaceable.');
        if (check) {
            try {
                await axios.delete(`http://localhost:3000/api/Questions/delete/${element.id}`);
                setQuestions((questions) =>
                    questions.filter((question) => question.id !== element.id)
                );
            } catch (err) {
                console.error("Failed to delete product:", err);
            }
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <p>..........................................................................</p>
                <p>.nav.........................................................................</p>
            </div>
            <AddQuestion handleNewQuestion={handleNewQuestion} />
            {questions.map((question, i) => {
                // State for hover effect

                return (
                    <div
                        key={i}
                        className="relative max-w-2xl mx-auto my-8"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {hoveredIndex === i && ( // Show delete button only for the hovered question
                            <button
                                onClick={() => { handleDelete(question) }}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    backgroundColor: '#F05B50',
                                    border: 'none',
                                    color: 'white',
                                    padding: '5px 8px',
                                    borderRadius: '10%',
                                    cursor: 'pointer',
                                    fontSize: '9px',
                                }}
                            >
                                x
                            </button>
                        )}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    {avatarPic ? (
                                        <img src={avatarPic} alt={question.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <User className="text-gray-400" size={24} />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">{question.name}</h3>
                                    <p className="text-sm text-gray-500">{question.QuestionDate.slice(0, 16)}</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">{question.Question}?</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => handleLike(question, !question.isLiked)}
                                    className={`flex items-center space-x-1 ${question.isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-600 transition-colors duration-200`}
                                >
                                    <ThumbsUp size={20} />
                                    <span>{question.like || 0}</span>
                                </button>
                                <div className="flex items-center space-x-1 text-gray-500">
                                    <MessageCircle size={20} />
                                    <span>0</span> {/* Waiting for the comments count */}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Footer />
        </div>
    );
}
