import './App.css';
import Navbar from "./components/Navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Joinus from "./components/Join/Joinus";
import Login from "./components/Login/Login";
import Registration from "./components/Create/Registration";
import axios from "axios";
import { useState, useEffect } from "react";
import Products from "./components/Products/Products";
import Template from "./components/Products/Template";
import Dashboard from "./components/Admin/Dashboard";
import ProtectedRoute from "./components/Admin/ProtectedRoute";

function App() {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [loggedUser, setLoggedUser] = useState({ name: '', contact: '' });
    const [isUserLoggedout, setIsUserLoggedout] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    useEffect(() => {
        // Restore login state from localStorage for both user and admin
        const savedUser = localStorage.getItem('loggedUser');
        const savedAdmin = localStorage.getItem('admin');

        if (savedUser) {
            setLoggedUser(JSON.parse(savedUser));
            setIsUserLogged(true);
        }

        if (savedAdmin) {
            setLoggedUser(JSON.parse(savedAdmin));
            setIsUserLogged(true);
            setIsAdminLoggedIn(true);  // Set admin logged-in state
        }
    }, []);

    const signOut = () => {
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('admin');
        setLoggedUser({ name: '', contact: '' });
        setIsUserLogged(false);
        setIsUserLoggedout(false);
        setIsAdminLoggedIn(false);  // Clear admin state on sign out
    };

    const setUserLoggedOut = (value) => {
        setIsUserLoggedout(value);
        setIsAdminLoggedIn(false);
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('user');
        localStorage.removeItem('admin'); // Remove admin if logged out
    };

    const createNewUser = async (user) => {
        try {
            await axios.post('https://shellzee-f013e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', user);
            console.log('User created successfully');
        } catch (err) {
            console.log(err);
        }
    };

    const getSignUser = async (user, callback) => {
        try {
            const response = await axios.get('https://shellzee-f013e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json');
            if (response && response.status === 200) {
                const users = response.data;
                let userFound = false;
                for (const key in users) {
                    if (users.hasOwnProperty(key)) {
                        const storedUser = users[key];
                        if (storedUser.contact === user.contact && storedUser.password === user.password) {
                            userFound = true;
                            console.log("Login Successful!");
                            setLoggedUser({
                                name: storedUser.name,
                                contact: storedUser.contact
                            });
                            localStorage.setItem('loggedUser', JSON.stringify(storedUser));
                            setIsUserLogged(true);
                            callback(true);
                            break;
                        }
                    }
                }
                if (!userFound) {
                    console.log("Invalid Login!");
                    callback(false);
                }
            } else {
                console.log("No users found in the database.");
                callback(false);
            }
        } catch (err) {
            console.log(err);
            callback(false);
        }
    };

    const getAdminSign = async (user, callback) => {
        try {
            const response = await axios.get('http://localhost:3001/admin-sign', {
                params: {
                    contact: user.contact,
                    password: user.password
                }
            });
            if (response && response.status === 200) {
                const admins = response.data.data.admins;
                let userFound = false;

                for (const storedUser of admins) {
                    if (storedUser.contact === user.contact && storedUser.password === user.password) {
                        userFound = true;
                        console.log("Login Successful!");
                        setLoggedUser({
                            name: storedUser.name,
                            contact: storedUser.contact
                        });
                        localStorage.setItem('loggedUser', JSON.stringify(storedUser));
                        localStorage.setItem('admin', JSON.stringify(storedUser)); // Store admin state
                        setIsUserLogged(true);
                        callback(true);
                        setIsAdminLoggedIn(true);
                        break;
                    }
                }

                if (!userFound) {
                    console.log("Invalid Login!");
                    callback(false);
                }
            } else {
                console.log("No Admin found in the database.");
                callback(false);
            }
        } catch (err) {
            console.log(err);
            callback(false);
        }
    };

    return (
        <div>
            <Navbar loggedUser={loggedUser} isUserLogged={isUserLogged} signOut={signOut} setUserLoggedOut={setUserLoggedOut} isAdminLoggedIn={isAdminLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<Template />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/join-us" element={<Joinus />} />
                <Route path="/sign-in" element={<Login getSignUser={getSignUser} getAdminSign={getAdminSign} />} />
                <Route path="/create-account" element={<Registration createNewUser={createNewUser} />} />
                <Route path="/admin-sign" element={<Login getAdminSign={getAdminSign} getSignUser={getSignUser} />} />

                <Route path="/admin-dashboard" element={<ProtectedRoute element={<Dashboard />} isAdminLoggedIn={isAdminLoggedIn} />} />
                <Route path="/manage-products" element={<ProtectedRoute element={<Dashboard />} isAdminLoggedIn={isAdminLoggedIn} />} />
                <Route path="/manage-users" element={<ProtectedRoute element={<Dashboard />} isAdminLoggedIn={isAdminLoggedIn} />} />
                <Route path="/manage-blogs" element={<ProtectedRoute element={<Dashboard />} isAdminLoggedIn={isAdminLoggedIn} />} />
                <Route path="/manage-info" element={<ProtectedRoute element={<Dashboard />} isAdminLoggedIn={isAdminLoggedIn} />} />
                <Route path="/manage-adds" element={<ProtectedRoute element={<Dashboard />} isAdminLoggedIn={isAdminLoggedIn} />} />
            </Routes>
        </div>
    );
}

export default App;
