import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function StaffDashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Staff Dashboard</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default StaffDashboard;
