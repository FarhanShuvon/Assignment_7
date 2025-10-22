import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="text-xl font-semibold text-black">
                    CS — Ticket System
                </div>
                <div className="items-center">
                    <ul className="flex gap-8 items-center">
                        <li>
                            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#changelog" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                Changelog
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#download" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                Download
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                        <button className="bg-linear-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:from-purple-50 hover:to-purple-700">
                            + New Ticket
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
