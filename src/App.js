// App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './Login';
import StaffDashboard from './StaffDashboard';
import AdminDashboard from './AdminDashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
     <Routes>
  <Route exact path="/login" element={<Login />} />
  <Route
    exact
    path="/staff"
    element={<PrivateRoute component={StaffDashboard} allowedRoles={['staff']} />}
  />
  <Route
    exact
    path="/admin"
    element={<PrivateRoute component={AdminDashboard} allowedRoles={['admin']} />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;
