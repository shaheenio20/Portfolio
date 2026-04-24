import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = <>
        <li className='font-bold text-primary'><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className='font-bold hover:text-primary transition-colors'><Link to="/about" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li className='font-bold hover:text-primary transition-colors'><Link to="/service" onClick={() => setIsOpen(false)}>Service</Link></li>
        <li className='font-bold hover:text-primary transition-colors'><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li className='font-bold hover:text-primary transition-colors'><Link to="/reg" onClick={() => setIsOpen(false)}>Register</Link></li>
    </>

    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50 animate-fade-in'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className="navbar px-0">
                    <div className="navbar-start">
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="btn btn-ghost lg:hidden mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        
                        <Link to="/" className="btn btn-primary text-base font-bold border-2 border-blue-500 rounded-xl hover:scale-105 transition-transform duration-300">
                            Portfolio
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <Link to="/login" className="font-semibold text-md bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden transition-opacity"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b border-base-300">
                    <span className="text-xl font-bold text-primary">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="btn btn-ghost btn-sm btn-circle hover:bg-base-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="overflow-y-auto flex-grow p-4">
                    <ul className="menu w-full text-lg gap-4">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;