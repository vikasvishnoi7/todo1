import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Login from './component/Login';
import Register from './component/Register';

import UserD from './component/UserD';
import AddEdit from './component/AddEdit';
import View from './component/View';

function App() {
  return (
    <div className="App">
      <Router>
   
        <Routes>
          <Route path="/userd/edit/:ids" element={<AddEdit/>}></Route>
          <Route path="/userd/:ids" element={<View/>}></Route>
          <Route path="/userd/add" element={<AddEdit />}></Route>
          <Route path="/userd" element={<UserD />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
