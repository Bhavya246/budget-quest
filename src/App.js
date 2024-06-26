import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Changed to NavLink for active link styling
import Dashboard from './pages/Dashboard';
import BudgetTracker from './pages/BudgetTracker';
import Login from './pages/Login';
import Register from './pages/Register'; // Ensure this component is correctly exported and imported
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>BudgetQuest</h1>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="active-link">Dashboard</NavLink></li>
            <li><NavLink to="/budget-tracker" activeClassName="active-link">Budget Tracker</NavLink></li>
            <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
            <li><NavLink to="/register" activeClassName="active-link">Register</NavLink></li> {/* Added Register link */}
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/budget-tracker" element={<BudgetTracker />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Added Register route */}
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 BudgetQuest</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;