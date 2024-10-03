import './App.css';
import './assets/css/App.sass'
import React from 'react';
import Home from './components/Home'
import NewPost from './components/NewPost'
import SinglePost from './components/SinglePost'
import { Routes, Route } from 'react-router-dom';

function App() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/post/:articleId" element={<SinglePost />} />
        </Routes>
    );
}

export default App;
