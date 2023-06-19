import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';



function AdminDashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default AdminDashboard;
