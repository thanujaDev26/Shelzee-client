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

function App() {

    let getNewUser = async (user) =>{
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
  return (
      <div>


          <Navbar/>
          <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about-us" element={<About/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/join-us" element={<Joinus/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/sign-in" element={<Login/>}/>
              <Route path="/create-account" element={<Registration getNewUser={getNewUser}/>}/>
          </Routes>
      </div>
  );
}

export default App;
