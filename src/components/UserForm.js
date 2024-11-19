import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addUser, editUser, getUsers } from '../services/api';

const UserForm = ({ updateUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  // Load user data for editing
  useEffect(() => {
    if (id) {
      getUsers()
        .then((response) => {
          const user = response.data.find((u) => u.id === parseInt(id, 10));
          if (user) {
            setFormData({
              firstName: user.name.split(' ')[0] || '',
              lastName: user.name.split(' ')[1] || '',
              email: user.email || '',
              department: user.department || '',
            });
          }
        })
        .catch(() => alert('Failed to load user data'));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: id || Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      department: formData.department,
    };

    const apiCall = id ? editUser(id, userData) : addUser(userData);

    apiCall
      .then((response) => {
        updateUsers((prevUsers) => {
          if (id) {
            // Update existing user
            return prevUsers.map((user) =>
              user.id === parseInt(id, 10) ? { ...user, ...userData } : user
            );
          }
          // Add new user
          return [...prevUsers, { ...userData, id: response.data.id }];
        });
        navigate('/');
      })
      .catch(() => alert('Failed to save user data'));
  };

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Add User'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
