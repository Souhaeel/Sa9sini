import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, User } from 'lucide-react';
import axios from 'axios'
import Footer from './Footer'

export default function MainPage() {

    let need = { avatarUrl:'https://i.pinimg.com/236x/b8/b2/a5/b8b2a50452e16ab00d4cfb36a2630c77.jpg',
        name:'anything', postedAt:'20/29/2056', question:'The Royal Hunting Jacket offers',
         initialLikes: 0,
         commentCount: 0 }

    const [likes, setLikes] = useState(need.initialLikes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };


    return (
        <div  >
            <div>
                <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto my-8">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            {need.avatarUrl ? (
                                <img src={need.avatarUrl} alt={need.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <User className="text-gray-400" size={24} />
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">{need.name}</h3>
                            <p className="text-sm text-gray-500">{need.postedAt}</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700">{need.question}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLike}
                            className={`flex items-center space-x-1 ${isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-600 transition-colors duration-200`}
                        >
                            <ThumbsUp size={20} />
                            <span>{likes}</span>
                        </button>
                        <div className="flex items-center space-x-1 text-gray-500">
                            <MessageCircle size={20} />
                            <span>{need.commentCount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

