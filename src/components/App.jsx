import React from "react";

//import Blog from "./Blog";
//import Defheader from "./defheader";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
//import Post from "./Post";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/loginpage.js";
import RegisterPage from "../pages/registerpage.js";
import CreatePost from "../pages/CreatePost.js";
 

function App() {
  return ( 
    <Routes>   
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} /> 
      <Route path={'/login'} element={<LoginPage /> } />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route path="/create" element={<CreatePost />} />
    </Route>
    </Routes>    
    

    
    
  );
}

export default App;
