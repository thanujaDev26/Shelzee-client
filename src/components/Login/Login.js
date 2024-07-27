import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

export default function Login(props) {
    const [userInput, setUserInput] = useState({
        contact: '', password: ''
    });

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const getUserContact = (e) => {
        setUserInput((prev) => ({
            ...prev,
            contact: e.target.value
        }));
    };
    const getUserPassword = (e) => {
        setUserInput((prev) => ({
            ...prev,
            password: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { contact, password } = userInput;
        const signInUser = { contact, password };

        props.getSignUser(signInUser, (success) => {
            if (success) {
                navigate('/home');
            } else {
                setUserInput({
                    contact: '', password: ''
                })
                setShowModal(true);
            }
        });
    };

    return (
        <div className="flex mt-20 min-h-full flex-col lg:flex-row justify-center px-6 py-12 lg:px-8">
            <div className="lg:w-1/2 flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                <form onSubmit={onSubmit} method="POST" className="mt-10 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email or Phone Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                value={userInput.contact}
                                onChange={getUserContact}
                                name="email"
                                type="text"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                value={userInput.password}
                                onChange={getUserPassword}
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/create-account" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Create an account
                    </Link>
                </p>
            </div>
            <div className="hidden lg:w-1/2 lg:flex lg:items-center lg:justify-center">
                <video
                    src={require('../../images/Dashboard.mp4')}
                    alt="Your Company"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
            <Modal showModal={showModal} handleClose={() => setShowModal(false)} />
        </div>
    );
}
