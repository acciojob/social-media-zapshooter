import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import UserPosts from './components/UserPosts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-logo">SocialMedia</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/notifications" className="nav-link">Notifications</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create-post" className="nav-link">Create Post</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserPosts />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
