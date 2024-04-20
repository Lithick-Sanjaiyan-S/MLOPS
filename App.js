import React, { useState } from 'react';

const InputForm = () => {
  // State variables to store input values and output
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [output, setOutput] = useState('');

  // Event handlers to update input values
  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending input values to the backend
      const response = await fetch('/api/process-inputs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input1, input2, input3, input4 }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from server');
      }

      // Parsing and setting the output received from the backend
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Enter the inputs</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '50px auto', width: '300px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            Input 1:
            <input type="text" value={input1} onChange={(e) => handleInputChange(e, setInput1)} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            Input 2:
            <input type="text" value={input2} onChange={(e) => handleInputChange(e, setInput2)} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            Input 3:
            <input type="text" value={input3} onChange={(e) => handleInputChange(e, setInput3)} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            Input 4:
            <input type="text" value={input4} onChange={(e) => handleInputChange(e, setInput4)} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3 style={{ textAlign: 'center' }}>Output:</h3>
        <p style={{ textAlign: 'center' }}>{output}</p>
      </div>
    </div>
  );
};

export default InputForm;
