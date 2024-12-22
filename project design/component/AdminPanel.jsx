// AdminPanel.jsx
import React from "react";

const AdminPanel = ({ onLogout }) => {
  return (
    <div className="admin-panel">
      <h2>Welcome to the Admin Panel</h2>
      <p>You have successfully logged in as an admin!</p>
      {/* Add other admin functionality here */}
      <button onClick={onLogout}>Log Out</button> {/* Log Out Button */}
    </div>
  );
};

export default AdminPanel;
