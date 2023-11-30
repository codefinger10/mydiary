import "./styles/App.css";
import React from 'react';
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import DiaryIndex from "./pages/diary/Index"
import DiaryAdd from "./pages/diary/DiaryAdd";
import DiaryEdit from "./pages/diary/DiaryEdit";
import First from "./pages/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {



  return ( 
    <>
          <Intro>  </Intro>
          <Index></Index>
          <DiaryIndex></DiaryIndex>
          <DiaryAdd></DiaryAdd>
          <DiaryEdit></DiaryEdit>
          <First></First>
    </>
  )
}

export default App;

