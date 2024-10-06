import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, User } from 'lucide-react';
import axios from 'axios';
import Footer from './sub_components/Footer';
import AddQuestion from './sub_components/AddQuestion';
import BlueBox from './sub_components/BlueBox';
import NavBar from './sub_components/NavBar';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const [questions, setQuestions] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [commentInputs, setCommentInputs] = useState({});
    const [comments, setComments] = useState({});
    const [users, setUsers] = useState({});
    const [userImage, setuserImage] = useState({});
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [refresh, setRefresh] = useState(true);


    const nav = useNavigate();

    let avatarPic = 'https://i.pinimg.com/236x/53/a3/89/53a3893001f4f0a310c6ce792fe6598a.jpg';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/Questions/getAll');
                const sortedQuestions = res.data.sort((a, b) => b.id - a.id);
                setQuestions(sortedQuestions);
                setFilteredQuestions(sortedQuestions);

                const commentCountRes = await axios.get('http://localhost:3000/api/Answers/getAll');
                const allAnswers = commentCountRes.data;

                const userRes = await axios.get('http://localhost:3000/api/Users/getAll');
                const allUsers = userRes.data;

                const initialComments = {};
                const initialUsers = {};
                const initialUserImage = {}
                sortedQuestions.forEach((question) => {
                    const count = allAnswers.filter(answer => answer.questionId === question.id).length;
                    initialComments[question.id] = count;

                    const user = allUsers.find(user => user.id === question.userId);
                    initialUsers[question.id] = user ? user.userName : 'Unknown';

                    const userimage = allUsers.find(userimage => userimage.id === question.userId);
                    initialUserImage[question.id] = userimage ? userimage.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4VRK9YD-mETSqxe9gFL2lu8PAh0aSa8W6w&s';
                });

                setComments(initialComments);
                setUsers(initialUsers);
                setuserImage(initialUserImage)
            } catch (err) {
                console.log('Error:', err);
            }
        };

        fetchData();
    }, [refresh]);

    const handleNewQuestion = (newQuestion) => {
        setFilteredQuestions((questions) => [newQuestion, ...questions]);
    };

    const handleLike = async (question) => {
        const newLikeStatus = !question.isLiked;
        const newLikeCount = newLikeStatus ? question.Like + 1 : question.Like - 1;

        try {
            setQuestions((prevQuestions) =>
                prevQuestions.map((q) =>
                    q.id === question.id ? { ...q, Like: newLikeCount, isLiked: newLikeStatus } : q
                )
            );

            await axios.put(`http://localhost:3000/api/Questions/update/${question.id}`, { Like: newLikeCount });

            console.log('New Like Status:', newLikeStatus);

            setRefresh(!refresh);
        } catch (err) {
            console.log('Error updating like:', err);
        }
    };



    const handleComment = (questionId) => {
        setCommentInputs((prev) => ({
            ...prev,
            [questionId]: prev[questionId] === undefined ? '' : undefined
        }));
    };

    const handleCommentSubmit = async (questionId) => {
        const newComment = commentInputs[questionId];

        if (newComment) {
            await axios.post(`http://localhost:3000/api/Answers/add`, {
                Answer: newComment,
                AnswersDate: new Date(),
                userId: 1,
                questionId: questionId
            });

            setComments((prev) => ({
                ...prev,
                [questionId]: prev[questionId] + 1,
            }));

            setCommentInputs((prev) => ({ ...prev, [questionId]: undefined }));
        }
    };

    const handleDelete = async (element) => {
        const check = window.confirm('Are you sure? This might be irreplaceable.');

        if (check) {
            try {
                await axios.delete(`http://localhost:3000/api/Questions/delete/${element.id}`);

                setQuestions((prevQuestions) =>
                    prevQuestions.filter((question) => question.id !== element.id)
                );
                setFilteredQuestions((prevQuestions) =>
                    prevQuestions.filter((question) => question.id !== element.id)
                );
            } catch (err) {
                console.error("Failed to delete question:", err);
            }
        }
    };

    return (
        <div>
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                color: 'white',
                zIndex: '1000',
                padding: '10px'
            }}>
                <NavBar setFilteredQuestions={setFilteredQuestions} questions={questions} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px', paddingTop: '60px' }}>
                <div style={{ width: '70%', paddingRight: '20px' }}>
                    <AddQuestion handleNewQuestion={handleNewQuestion} />
                    {filteredQuestions.map((question, i) => (
                        <div
                            key={i}
                            className="relative max-w-2xl mx-auto my-8"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {hoveredIndex === i && (
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
                                            <img src={userImage[question.id]} alt={users[question.id]} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <User className="text-gray-400" size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800">{users[question.id] || 'Isabella Anderson'}</h3>
                                        <p className="text-sm text-gray-500">{question.QuestionDate.slice(0, 16)}</p>
                                    </div>
                                </div>
                                <div
                                    onClick={() => { nav('/OneQuestion', { state: question }) }}
                                    className="mb-4">
                                    <p className="text-gray-700 cursor-pointer">{question.Question}?</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleLike(question)}
                                        className={`flex items-center space-x-1 ${question.isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-600 transition-colors duration-200`}
                                    >
                                        <ThumbsUp size={20} />
                                        <span>{question.Like || 0}</span>
                                    </button>

                                    <div className="flex items-center space-x-1 text-gray-500">
                                        <button
                                            onClick={() => handleComment(question.id)}
                                            className="flex items-center space-x-1"
                                        >
                                            <MessageCircle size={20} />
                                            <span>{comments[question.id] || 0}</span>
                                        </button>
                                    </div>
                                </div>
                                {commentInputs[question.id] !== undefined && (
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            value={commentInputs[question.id] || ''}
                                            onChange={(e) => setCommentInputs((prev) => ({
                                                ...prev,
                                                [question.id]: e.target.value
                                            }))}
                                            placeholder="Type your comment..."
                                            className="border rounded px-2 py-1 w-full"
                                        />
                                        <button
                                            onClick={() => handleCommentSubmit(question.id)}
                                            className="mt-2 bg-blue-500 text-white rounded px-4 py-1"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ position: 'fixed', top: '80px', right: '200px', width: '200px' }}>
                    <BlueBox />
                </div>
            </div>

            <Footer />
        </div>
    );
}
