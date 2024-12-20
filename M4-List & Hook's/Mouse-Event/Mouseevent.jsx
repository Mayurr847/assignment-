import React, { useState, useEffect } from 'react';

const Mouseevent = () => {
  // Step 1: Create state to store the mouse coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Step 2: Handle mouse move event
  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,  // Get horizontal mouse position
      y: e.clientY,  // Get vertical mouse position
    });
  };

  // Step 3: Use `useEffect` to add the mouse move listener when the component mounts
  useEffect(() => {
    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures it only runs once on mount/unmount

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: 'blue',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        pointerEvents: 'none', // Makes sure the element doesn't block mouse events
      }}
    >
      {/* This div will follow the mouse */}
    </div>
  );
};

export default Mouseevent;
