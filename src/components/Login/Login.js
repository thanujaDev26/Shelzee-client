import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Login(props) {
    const [userInput, setUserInput] = useState({
        contact: '', password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isAdminLogin, setIsAdminLogin] = useState(false);
    const [loginRoute, setLoginRoute] = useState('/sign-in');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleLoginType = () => {
        setIsAdminLogin((prev) => {
            const newLoginType = !prev;
            const newRoute = newLoginType ? '/admin-sign' : '/sign-in';
            navigate(newRoute);
            return newLoginType;
        });
    };

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
        const signInUser = { contact, password, isAdmin: isAdminLogin };

        if(!isAdminLogin){
            props.getSignUser(signInUser, (success) => {
                if (success) {
                    navigate('/home');
                } else {
                    setUserInput({
                        contact: '', password: ''
                    });
                    setShowModal(true);
                }
            })
        }
        else{
            props.getAdminSign(signInUser, (success) =>{
                if (success) {
                    navigate('/admin-dashboard');
                }
                else {
                    setUserInput({
                        contact: '', password: ''
                    });
                    setShowModal(true);
                }
            });
        }
    };


    return (
        <div className="flex min-h-full justify-center lg:px-8">
            <div className="flex flex-col mt-20 lg:flex-row lg:w-5/6 w-full items-center">
                <div className="w-full lg:w-[calc(50%-6px)] flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm lg:p-0">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {isAdminLogin ? 'Admin Login' : 'Sign in to your account'}
                    </h2>
                    <form onSubmit={onSubmit} method="POST" className="mt-10 space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                {isAdminLogin ? 'Admin Email' : 'Email or Phone Number'}
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
                            <div className="relative mt-2">
                                <input
                                    id="password"
                                    value={userInput.password}
                                    onChange={getUserPassword}
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="h-5 w-5 text-gray-500" aria-hidden="true"/>
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true"/>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isAdminLogin ? 'Admin Sign in' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                    <button
                        onClick={toggleLoginType}
                        id="toggleLoginType"
                        className="mt-4 w-full flex justify-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        {isAdminLogin ? 'Switch to User Login' : 'Switch to Admin Login'}
                    </button>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/create-account"
                              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create an account
                        </Link>
                    </p>
                </div>
                {/*<div className="hidden lg:block lg:w-[calc(50%-8px)] lg:flex lg:items-center lg:justify-center mx-2 p-4 lg:p-0">*/}
                {/*    <div className="w-full h-0 aspect-w-1 aspect-h-1">*/}
                {/*        <video*/}
                {/*            src={require('../../images/Dashboard.mp4')}*/}
                {/*            alt="Your Company"*/}
                {/*            className="w-full h-full object-cover"*/}
                {/*            autoPlay*/}
                {/*            loop*/}
                {/*            muted*/}
                {/*            playsInline*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Modal showModal={showModal} handleClose={() => setShowModal(false)} />
        </div>
    );
}
