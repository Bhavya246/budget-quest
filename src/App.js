import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './theme';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const BudgetTracker = lazy(() => import('./pages/BudgetTracker'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <li><NavLink to="/register" activeClassName="active-link">Register</NavLink></li>
            </ul>
          </nav>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/budget-tracker" element={<BudgetTracker />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Suspense>
          </main>
          <footer>
            <p>&copy; 2024 BudgetQuest</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;