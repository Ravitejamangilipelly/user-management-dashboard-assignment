# User Management Dashboard

A responsive web application for managing users (view, add, edit, delete) using a mock API (`JSONPlaceholder`).

## Features

- View a list of users with details: ID, First Name, Last Name, Email, Department.
- Add new users.
- Edit existing users.
- Delete users.
- Responsive design for different screen sizes.
- Error handling for API failures.

## Technologies Used

- React.js
- React Router
- Axios
- JSONPlaceholder API
- CSS (Media Queries for responsiveness)

## Setup Instructions

  1. Clone the repository:
     git clone <repo-url> repo-url
     
     cd user-management-dashboard
     
  2. Install dependencies:
     npm install
  
  3. Start the development server:
     npm start
  
  4. Open the application in your browser:
     http://localhost:3000

## Challenges Faced

1. API Limitations
Issue: JSONPlaceholder doesn't persist data; changes (add, edit, delete) are reflected only in the client state.
Solution: Implemented dynamic state management to simulate data persistence.
2. Responsive Design
Issue: Displaying a table layout responsively on small screens.
Solution: Used CSS media queries and data-label attributes to convert the table into a stacked format on mobile devices.
3. State Synchronization
Issue: Ensuring the table updates immediately after add/edit/delete actions.
Solution: Managed shared state using React's useState and updated the UI dynamically based on API responses.

## Improvements for the Future
1.Backend Integration:
Replace the mock API with a real backend to persist user data.

2.Advanced Features:
Add pagination or infinite scrolling for large datasets.
Include search and filtering functionality.

3.Testing:
Implement unit and integration tests using a framework like Jest or React Testing Library.

4.Enhanced UI:
Use a component library (e.g., Material-UI) to improve the user interface.
