import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const handleInLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setSuccess(' ');
        setLoginError(' ');
        if (password.length < 6) {
            setLoginError("Password must be greater than 6 length.");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                setSuccess("Logged in successfully.")
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                setLoginError(error.message)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left p-6">
                        <h1 className="lg:text-5xl text-3xl font-bold mb-5 pt-20 lg:pt-0">Login now</h1>
                        <p className="mb-3">
                            The login page enables existing users to access their accounts by entering their credentials, typically email and password.
                            It verifies the input against stored data and grants access upon successful authentication.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full lg:max-w-sm max-w-xs shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleInLogin}>
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
                                <button className="btn btn-primary w-2/3 ">Login</button>
                            </div>
                        </form>
                        {loginError && <p className="text-red-600 text-xl text-center mb-5">{loginError}</p>}
                        {success && <p className="text-green-600 text-xl text-center mb-5">{success}</p>}
                        <p className="text-lg font-semibold px-3 mb-2">New to this website ? Please  <Link className="text-green-600" to="/reg"> Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;