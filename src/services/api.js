import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => axios.get(API_BASE_URL); // API_BASE_URL
export const addUser = (user) => Promise.resolve({ data: { ...user, id: Date.now() } }); // adding
export const editUser = (id, user) => Promise.resolve({ data: { ...user, id } }); // editing
export const deleteUser = (id) => Promise.resolve({ data: {} }); // deleting
