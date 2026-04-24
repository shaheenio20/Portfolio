import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const Contact = () => {
    const [submitError, setSubmitError] = useState(' ');
    const [successSubmit, setSuccessSubmit] = useState(' ');
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setSubmitError(' ');
        setSuccessSubmit(' ');
        if (password.length < 6) {
            setSubmitError("Password must be greater than or equal 6 length.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                setSuccessSubmit("Submit successfully.")
                setSubmitError(' ');
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                setSubmitError(error.message);
                setSuccessSubmit('');
            })
    }
    return (
        <div className='bg-base-200 py-24 overflow-hidden'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 items-center'>
                    <div className='lg:w-[400px] w-full items-center animate-slide-in-right'>
                        <h1 className="lg:text-4xl text-3xl font-bold mb-6 pt-16 lg:pt-0 text-primary">Let’s discuss your Project</h1>
                        <p className='mb-12 text-lg opacity-80 text-base-content'>I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.</p>
                        <div className="space-y-8">
                            <div className='flex gap-6 items-center group cursor-pointer hover:-translate-y-1 transition-transform'>
                                <div className='w-14 h-14 bg-primary text-primary-content flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    <CiLocationOn className='text-3xl' />
                                </div>
                                <div className='text-base-content'>
                                    <h2 className="text-sm opacity-70">Address</h2>
                                    <h1 className="text-xl font-bold">Zindabazar, Sylhet</h1>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center group cursor-pointer hover:-translate-y-1 transition-transform'>
                                <div className='w-14 h-14 bg-secondary text-secondary-content flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    <MdEmail className='text-3xl' />
                                </div>
                                <div className='text-base-content'>
                                    <h2 className="text-sm opacity-70">Email</h2>
                                    <h1 className="text-xl font-bold break-all">shahinurmubarak238@gmail.com</h1>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center group cursor-pointer hover:-translate-y-1 transition-transform'>
                                <div className='w-14 h-14 bg-accent text-accent-content flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    <FaPhoneVolume className='text-2xl' />
                                </div>
                                <div className='text-base-content'>
                                    <h2 className="text-sm opacity-70">Call Now</h2>
                                    <h1 className="text-xl font-bold">+8801792345238</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animate-fade-in-up">
                        <form className="w-full max-w-2xl bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-300 space-y-6 hover:shadow-primary/10 transition-shadow duration-500" onSubmit={handleSubmit}>
                            <h2 className="text-3xl font-bold text-base-content mb-6">Contact Me</h2>
                            <div>
                                <label className="block text-sm font-semibold text-base-content/80 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-5 py-3 bg-base-200 text-base-content border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-base-content/80 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-5 py-3 bg-base-200 text-base-content border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-base-content/80 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="w-full px-5 py-3 bg-base-200 text-base-content border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-base-content/80 mb-2" htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    className="w-full px-5 py-3 bg-base-200 text-base-content border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-base-content/80 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-5 py-3 bg-base-200 text-base-content border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full btn btn-primary btn-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                            {submitError && submitError.trim() !== '' && <div className="alert alert-error mt-4 rounded-xl shadow-sm"><span className="font-semibold">{submitError}</span></div>}
                            {successSubmit && successSubmit.trim() !== '' && <div className="alert alert-success mt-4 rounded-xl shadow-sm"><span className="font-semibold text-white">{successSubmit}</span></div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;