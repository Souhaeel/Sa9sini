import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import logo from '../css/logo.png';

export default function NavBar({ setFilteredQuestions, questions }) {
    const [searchTerm, setSearchTerm] = useState('');

    const nav = useNavigate()


    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

    const filtered = questions.filter(question =>
        question.Question.toLowerCase().includes(value.toLowerCase()) 
        // || (question.category && question.category.toLowerCase().includes(value.toLowerCase())) // only by questions for the moment
    );
    setFilteredQuestions(filtered);
};


return (
    <nav className="bg-white shadow-md" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '1000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <img src={logo} alt="Logo" className="w-15 h-12 rounded-full" />

                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                id="search"
                                name="search"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-700 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" // Added text-gray-700
                                type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Search by question or category" // only by questions for the moment
                            />

                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <button 
                    onClick={()=>{nav('/Sign_up')}}
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Sign In
                    </button>
                    <button 
                    onClick={()=>{nav('/ProfilePage')} }
                    className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <User className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
                        My Profile
                    </button>
                </div>
            </div>
        </div>
    </nav>
);
}
