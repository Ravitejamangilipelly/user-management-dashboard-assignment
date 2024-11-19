import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
          <Route path="/add-user" element={<UserForm updateUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<UserForm updateUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
