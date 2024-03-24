import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import MainFooter from './components/Main-Footer/MainFooter.jsx';
import PopUp from './components/Layout/Pop-Up/PopUp.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>

      <Route path="/" element={<Home/>} />
      
        
      </Routes>

      <MainFooter/>
    </Router>
  );
}

export default App;
