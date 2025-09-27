import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const handleInRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError(' ');
        setSuccess(' ');
        if (password.length < 6) {
            setRegisterError("Password must be greater than 6 length.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                setSuccess("User created successfully.")
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left p-6">
                        <h1 className="lg:text-5xl text-3xl font-bold mb-5 pt-20 lg:pt-0">Register now</h1>
                        <p className="mb-3">
                            The register page allows new users to create an account by providing details such as name, email,
                            and password. It ensures user data is securely stored and may
                            include validations to prevent duplicate or invalid entries.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full lg:max-w-sm max-w-xs shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleInRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email: </span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password: </span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <button className="btn btn-primary w-2/3">Register</button>
                            </div>
                        </form>
                        {registerError && <p className="text-red-600 text-xl text-center mb-5">{registerError}</p>}
                        {success && <p className="text-green-600 text-xl text-center mb-5">{success}</p>}
                        <p className="text-lg font-semibold px-3 mb-2">Already have an account ? Please  <Link className="text-green-600" to="/login"> login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;