import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, User } from 'lucide-react';
import axios from 'axios';
import Footer from './Footer';
import AddQuestion from './AddQuestion'

export default function MainPage() {
    const [questions, setQuestions] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [newQuestion,setnewQuestion] = ('')

    let avatarPic = 'https://i.pinimg.com/236x/53/a3/89/53a3893001f4f0a310c6ce792fe6598a.jpg';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/Questions/getAll');
                setQuestions(res.data);
            } catch (err) {
                console.log('this error', err);
            }
        };

        fetchData();
    }, [likeCount]);

    const handleLike = async (question, add) => {
        try {
            const newLikeCount = add ? question.like + 1 : question.like - 1; // Consistent naming for `like`
            await axios.put(`http://localhost:3000/api/Questions/update/${question.id}`, { like: newLikeCount });
            console.log(add ? 'liked' : 'unliked');

            // Update the like count in the local state
            setQuestions((prevQuestions) =>
                prevQuestions.map((q) =>
                    q.id === question.id ? { ...q, like: newLikeCount, isLiked: add } : q // Update the `like` and `isLiked`
                )
            );
        } catch (err) {
            console.log('this error', err);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <p>..........................................................................</p>
                <p>.nav.........................................................................</p>
            </div>
            <AddQuestion />
            {questions.map((question, i) => (
                <div key={i}>
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto my-8">
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
                                <p className="text-sm text-gray-500">{question.QuestionDate.slice(0,16)}</p>
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
                                <span>0</span> {/*waiting for the comments count } */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}
