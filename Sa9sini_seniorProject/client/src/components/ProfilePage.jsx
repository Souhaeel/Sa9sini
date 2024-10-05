import React, { useState, useEffect } from 'react';
import { Mail, Calendar, ThumbsUp, Home } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from "moment"

export default function ProfilePage() {
    const [data, setData] = useState([]);
    const [users, setUser] = useState([]);
    const [image, setImage] = useState("");  // For selected image
    const [imageUrl, setImageUrl] = useState("");  // For uploaded image URL
    const userIndex = 8;

    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/Questions/getAll');
                setData(res.data);
                const userRes = await axios.get('http://localhost:3000/api/Users/getAll');
                setUser(userRes.data);
                setImageUrl(userRes.data[userIndex]?.image || 'https://i.pinimg.com/236x/09/fe/87/09fe871bbc8a2ca63c31c70382d9d3e6.jpg')
            } catch (err) {
                console.log('Error:', err);
            }
        };

        fetchData();
    }, []);

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "sa9sini");
        try {
            const res = await axios.post("https://api.cloudinary.com/v1_1/dcttg7rql/image/upload", formData);
            const secureUrl = res.data.secure_url;
            await axios.put(`http://localhost:3000/api/users/updateImage/${userIndex + 1}`, { image: secureUrl });
            setImageUrl(secureUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const currentUser = users[userIndex] || {};
    const userName = currentUser.userName || 'noBody';
    const userEmail = currentUser.email || 'noEmail';

    return (
        <div>
            <div onClick={() => { nav('/') }} className="inline-flex items-center justify-center">
                <Home size={24} aria-hidden="true" style={{ position: 'fixed', top: '0', left: '0' }} />
                <span className="sr-only">Home</span>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-10">
                        <div className="flex flex-col sm:flex-row items-center">
                            <img
                                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover mb-4 sm:mb-0 sm:mr-8"
                                src={imageUrl}
                                alt={`${userName}'s profile`}
                            />
                            <div className="text-center sm:text-left">
                                <h1 className="text-3xl font-bold text-gray-900">{userName}</h1>
                                <p className="flex items-center justify-center sm:justify-start text-gray-600 mt-2">
                                    <Mail className="w-5 h-5 mr-2" />
                                    {userEmail}
                                </p>

                          
                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="mt-4"
                                />
                                <button
                                    onClick={handleImageUpload}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                                >
                                    Upload Profile Picture
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-6 py-8 sm:px-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Questions Asked</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Likes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {data.map((question) => (
                                        <tr key={question.id}>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{question.Question}</div>
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500 flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    {moment(question.QuestionDate, "YYYYMMDD").fromNow()}
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500 flex items-center">
                                                    <ThumbsUp className="w-4 h-4 mr-2" />
                                                    {question.Like}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}