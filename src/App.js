import React from "react";
import "./App.css";
import { useState } from "react";
import Blog from "./blogs/Blog";
// import BlogPage from "./BlogPage";
// import Login from "./Login";
// import Signup from "./Signup";
function App() {
  let [login, setlogin] = useState(true);
  let [signup, setsignup] = useState(true);
  return (
    <>
      <div id="header">
        <div className="title">
          <h1>Blogs</h1>
        </div>
        <div className="login">
          <a href="#" onClick={()=>setlogin(true)}>LogIn</a>
          <a href="#"onClick={()=>setsignup(false)}>SignUp</a>
        </div> 

         
      </div>  
    {/* <BlogPage/> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* signup n login vs Blog */}
      <Blog login={login}/>

    </>
  );
}

export default App;
