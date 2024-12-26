import React, { useState } from 'react';

const Toggle = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks which accordion is open

  const accordionData = [
    { title: 'What Is Reactjs?', content: 'React, also known as ReactJS, is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs). It was developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, reusable components, and active community support.' },
    { title: 'Why Reactjs is used?', content: 'ReactJS is used to build dynamic, fast, and interactive user interfaces for web applications. It allows developers to efficiently manage UI components, reuse code, and update the DOM using a virtual DOM for better performance.' },
    { title: 'What is the Features of Reactjs?', content: `Key features of ReactJS include:

Virtual DOM: Improves performance by minimizing direct DOM updates.
Component-Based Architecture: Enables reusable, modular code.
Declarative UI: Simplifies coding by describing the desired outcome.
Unidirectional Data Flow: Ensures predictable state management.
JSX: Allows mixing HTML with JavaScript for better readability.
React Hooks: Provides functional components with state and lifecycle features.
Extensibility: Integrates well with other libraries and frameworks.` },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {accordionData.map((item, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div
              style={{
                marginTop: '10px',
                transition: 'opacity 0.3s',
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
