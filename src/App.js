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
        <Route exact path="/login" component={Login} />
        <PrivateRoute  exact path="/staff" component={StaffDashboard} allowedRoles={['staff']} />
        <PrivateRoute exact path="/admin" component={AdminDashboard} allowedRoles={['admin']} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
