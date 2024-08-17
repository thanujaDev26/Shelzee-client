import './App.css';
import Navbar from "./components/Navigation/Navbar";
import {Route, Routes} from "react-router-dom";
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

function App() {
    let [isUserLogged, setIsUserLogged] = useState(false);
    let [isUserLoggedout, setIsUserLoggedout] = useState(false); //Use kre nha, podi wdkta use kre

    useEffect(() => {
        // if (loggedUser.name && loggedUser.contact) {
        //     setIsUserLogged(true);
        //     console.log("Logged in user details:", loggedUser);
        // }
        let isUserLoggedOut = localStorage.getItem('isLoggedIn');
        if(isUserLoggedout === '1'){
            setIsUserLoggedout(true)
        }
    }, []);

    let setUserLoggedOut = (value) =>{
        setIsUserLoggedout(value)
    }
    let createNewUser = async (user) => {
        try {
            await axios.post('https://shellzee-f013e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', user)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        } catch (err) {
            console.log(err);
        }
    }

    let [loggedUser, setLoggedUser] = useState(() => {
        const savedUser = localStorage.getItem('loggedUser');
        return savedUser ? JSON.parse(savedUser) : { name: '', contact: '' };
    });

    const signOut = () => {
        localStorage.removeItem('loggedUser');
        setLoggedUser({ name: '', contact: '' });
        setIsUserLogged(false);
        localStorage.removeItem('loggedUser');
        setIsUserLoggedout(false)
    };

    let getSignUser = async (user, callback) => {
        try {
            await axios.get('https://shellzee-f013e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
                .then((response) => {
                    if (response && response.status === 200) {
                        const users = response.data;
                        let userFound = false;
                        for (const key in users) {
                            if (users.hasOwnProperty(key)) {
                                const storedUser = users[key];
                                if (storedUser.contact === user.contact && storedUser.password === user.password) {
                                    userFound = true;
                                    console.log("Login Successful!");
                                    setLoggedUser((prevState) => {
                                        const updatedUser = {
                                            ...prevState,
                                            name: storedUser.name,
                                            contact: storedUser.contact
                                        };
                                        localStorage.setItem('loggedUser', JSON.stringify(updatedUser));
                                        return updatedUser;
                                    });
                                    callback(true);
                                    setIsUserLogged(true);
                                    localStorage.setItem('loggedUser', JSON.stringify(user));
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
                })
                .catch((error) => {
                    console.log(error);
                    callback(false);
                })
        } catch (err) {
            console.log(err);
            callback(false);
        }
    }

    return (
        <div>
            <Navbar loggedUser={loggedUser} isUserLogged={isUserLogged} signOut={signOut} setUserLoggedOut={setUserLoggedOut}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:productId" element={<Template />}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/join-us" element={<Joinus/>}/>
                <Route path="/sign-in" element={<Login getSignUser={getSignUser}/>}/>
                <Route path="/create-account" element={<Registration createNewUser={createNewUser}/>}/>
                <Route path="/admin-dashboard" element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}

export default App;
