  import React,  { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import Header from "./component/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const App = () => {

 const state = useSelector(state=>state.user)
 console.log('%c 🍌 state: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', state);
  return (
    <>
      <Header />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;
