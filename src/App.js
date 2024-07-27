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
import { useState,useEffect } from "react";

function App() {

    let createNewUser = async (user) =>{
        try{
            await axios.post('https://shellzee-f013e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', user)
                .then((response) => {
                    console.log(response);
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
        catch(err){
            console.log(err);
        }
    }

    let [loggedUser,setLoggedUser] = useState({
        name :'', contact : ''
    });

    let getSignUser = async(user, callback)=>{
        try{
            await axios.get('https://shellzee-f013e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
                .then((response) => {
                  if(response && response.status === 200){
                      // if(response.data.contact === user.contact && response.data.password === user.password){
                      //     console.log("Login Successful!")
                      // }
                      // else {
                      //     console.log("Invalid Login!")
                      //console.log(response.data);
                      const users = response.data;
                      let userFound = false;
                      for (const key in users) {
                          if (users.hasOwnProperty(key)) {
                              const storedUser = users[key];
                              if (storedUser.contact === user.contact && storedUser.password === user.password) {
                                  userFound = true;
                                  console.log("Login Successful!");
                                  setLoggedUser((prevState)=>{
                                      return{
                                          ...prevState,
                                          name : storedUser.name,
                                          contact : storedUser.contact
                                      }
                                      }
                                  )
                                  // console.log("Name is : " + loggedUser.name);
                                  callback(true)
                                  break;
                              }
                          }
                      }
                      if (!userFound) {
                          console.log("Invalid Login!");
                          callback(false);
                      }
                  }
                  else {
                      console.log("No users found in the database.");
                  }
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if (loggedUser.name && loggedUser.contact) {
            console.log("Logged in user details:", loggedUser);
        }
    }, [loggedUser]);

    useEffect(() => {
        getSignUser(loggedUser);
    }, []);

  return (
      <div>
          <Navbar loggedUser={loggedUser}/>
          <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about-us" element={<About/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/join-us" element={<Joinus/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/sign-in" element={<Login getSignUser={getSignUser}/>}/>
              <Route path="/create-account" element={<Registration createNewUser={createNewUser}/>}/>
          </Routes>
      </div>
  );
}

export default App;
