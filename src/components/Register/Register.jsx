import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const handleInRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setRegisterError(' ');
        if (password.length < 6) {
            setRegisterError("Password must be greater than 6 length.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                Swal.fire({
                    title: 'Account Created!',
                    text: 'Your account was successfully registered.',
                    icon: 'success',
                    confirmButtonText: 'Great!',
                    customClass: {
                        popup: 'bg-base-100 text-base-content rounded-3xl',
                        confirmButton: 'btn btn-primary',
                    }
                });
                form.reset();
            })
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-10 animate-fade-in-up">
                <div className="hero-content flex-col lg:flex-row-reverse w-11/12 lg:w-10/12 mx-auto">
                    <div className="text-center lg:text-left p-6 lg:ml-10 animate-slide-in-right">
                        <h1 className="lg:text-5xl text-3xl font-bold mb-5 text-primary">Register now</h1>
                        <p className="mb-3 text-lg opacity-80">
                            The register page allows new users to create an account by providing details such as name, email,
                            and password. It ensures user data is securely stored and may
                            include validations to prevent duplicate or invalid entries.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full lg:max-w-sm max-w-xs shrink-0 shadow-2xl animate-zoom-in">
                        <form className="card-body" onSubmit={handleInRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email: </span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered focus:ring-2 focus:ring-primary focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password: </span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered focus:ring-2 focus:ring-primary focus:outline-none" required />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <button className="btn btn-primary w-full rounded-xl hover:-translate-y-1 transition-transform">Register</button>
                            </div>
                        </form>
                        {registerError && registerError.trim() !== '' && <p className="text-error font-semibold text-center mb-5 px-4">{registerError}</p>}
                        <p className="text-sm font-semibold px-8 mb-6 text-center">Already have an account? <Link className="text-primary hover:underline" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;