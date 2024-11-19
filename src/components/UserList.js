import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch users from API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers()
      .then((response) => {
        // Transform data if necessary
        const mappedUsers = response.data.map((user) => ({
          id: user.id,
          firstName: user.name.split(' ')[0] || '',
          lastName: user.name.split(' ')[1] || '',
          email: user.email || '',
          department: user.department || 'N/A',
        }));
        setUsers(mappedUsers);
      })
      .catch(() => setError('Failed to load users'));
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch(() => alert('Failed to delete user'));
  };

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <button onClick={() => navigate('/add-user')}>Add User</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
  {users.map((user) => (
    <tr key={user.id}>
      <td data-label="ID">{user.id}</td>
      <td data-label="First Name">{user.firstName}</td>
      <td data-label="Last Name">{user.lastName}</td>
      <td data-label="Email">{user.email}</td>
      <td data-label="Department">{user.department}</td>
      <td data-label="Actions">
        <button onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</button>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
};

export default UserList;
