import React, { useState } from "react";
import AdminPanel from "./AdminPanel"; // Import AdminPanel component
import "../styles/Header.css";

const Header = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAdminPanel, setShowAdminPanel] = useState(false); // State to show Admin Panel

  // Triple-click detection
  const handleTripleClick = () => {
    if (showModal) return; // Prevent triple-click if the modal is already open
    
    setClickCount((prevCount) => prevCount + 1);
    setTimeout(() => setClickCount(0), 500); // Reset click count after 0.5s

    if (clickCount === 2) {
      // Triple-click detected
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setError(""); // Clear any error when modal is closed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message before validation
    setError("");

    // Check if username or password is missing
    if (username === "" && password === "") {
      setError("Please fill in both username and password.");
    } else if (username === "") {
      setError("Please fill in the username.");
    } else if (password === "") {
      setError("Please fill in the password.");
    } else if (username === "admin" && password === "password") {
      // Check for correct username and password
      setError(""); // Clear error
      setShowAdminPanel(true); // Show AdminPanel component
      setShowModal(false); // Close the modal
    } else {
      setError("Username or password is incorrect!"); // Error message for incorrect login
    }
  };

  const handleLogout = () => {
    setShowAdminPanel(false); // Hide AdminPanel
    setUsername(""); // Clear username
    setPassword(""); // Clear password
    setShowModal(false); // Close modal if open
  };

  return (
    <>
      <aside className="sidebar">
        <div className="left">
          <a href="#hero" onClick={handleTripleClick}>
            <img src="virat-kohli.jpg" alt="User Avatar"/>
          </a>
          <div className="menu-item">
            <a href="#about">
              <i className="bx bxs-group"></i>
              <span>About</span>
            </a>
          </div>
          <div className="menu-item">
            <a href="#projects">
              <i className="bx bxl-discord-alt"></i>
              <span>Projects</span>
            </a>
          </div>
          <div className="menu-item">
            <a href="#contact">
              <i className="bx bxs-contact"></i>
              <span>Contact</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Modal for Admin Login */}
{showModal && (
  <div className="modal-overlay">
    <div className="modal">
      {/* Left Side: Image */}
      <div className="modal-image"></div>

      {/* Right Side: Form */}
      <div className="modal-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="error">{error}</p>}
          <div className="modal-buttons">
            <button type="submit">Login</button>
            <button type="button" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

      {/* Show Admin Panel if successfully logged in */}
      {showAdminPanel && <AdminPanel onLogout={handleLogout} />}
    </>
  );
};

export default Header;
