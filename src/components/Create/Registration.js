import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

const clientId = '756817282935-lpjt725ikqbtq8th1vluapufil479psl.apps.googleusercontent.com';

const GoogleIcon = () => (
    <svg
        viewBox="0 0 48 48"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
    >
        <path
            d="M23.49 12.27c0-.82-.07-1.62-.2-2.39H12v4.8h6.31c-2.89 2.73-7.24 2.56-10.06.95v5.27h5.5c3.23-2.97 5.25-7.46 5.25-12.63z"
            fill="#4285F4"
        />
        <path
            d="M12 21.29c-3.1 0-5.71-1.04-7.89-2.83v5.27c2.3 1.54 5.12 2.51 8.22 2.51 4.76 0 8.79-3.17 10.22-7.39H12v0.01z"
            fill="#34A853"
        />
        <path
            d="M4.11 11.19C2.76 8.95 2 6.37 2 3.56 2 1.59 2.3 0 2.88 0H1.12C0.49 1.8 0 3.73 0 5.74c0 2.23.61 4.33 1.67 6.17l2.47-0.36z"
            fill="#FBBC05"
        />
        <path
            d="M12 4.58c2.21 0 4.18.77 5.74 2.1l4.29-4.29C17.82.82 15.08-1.4 12-1.4c-4.62 0-8.63 3.01-10.03 7.08l-2.47 0.36c2.27-4.66 7.32-8.04 13.5-8.04z"
            fill="#EA4335"
        />
    </svg>
);

export default function Registration() {

    const handleGoogleLoginSuccess = (response) => {
        console.log(response);
    };


    const handleGoogleLoginFailure = (error) => {
        console.error('Google login failed:', error);
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="flex min-h-full flex-1 flex-col lg:flex-row lg:justify-center px-6 py-12 lg:px-8">
                {/* Video Section */}
                <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                    <video
                        src={require('../../images/ShellZee.lk.mp4')}
                        alt="Your Company"
                        className="w-full max-h-screen object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

                {/* Registration Form */}
                <div className="flex-1 sm:mx-auto sm:w-full sm:max-w-sm lg:w-1/2 lg:py-16">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:hidden">
                        <video
                            src={require('../../images/ShellZee.lk.mp4')}
                            alt="Your Company"
                            className="w-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:mt-0" style={{ padding: '1rem', margin: '0rem' }}>
                        <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create an account today!
                        </h2>
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        required
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email or Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="contact"
                                        name="contact"
                                        type="text"
                                        required
                                        pattern="^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$|^\+?[1-9]\d{1,14}$"
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
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
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
                                    className="flex w-full justify-center  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Create an account
                                </button>
                            </div>
                        </form>


                        <div className="mt-6 justify-center">
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onFailure={handleGoogleLoginFailure}
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="justify-center items-center border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    >
                                        <GoogleIcon aria-hidden="true" />
                                        <span className="ml-3">Sign up with Google</span>
                                    </button>
                                )}
                            />
                        </div>


                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account? <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}
