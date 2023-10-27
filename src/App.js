import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setOutput('');
    } else if (value === '=') {
      try {
        // Use eval only for basic arithmetic operations
        setOutput(eval(input));
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === '√') {
      // Check if the input is a valid number
      const num = parseFloat(input);
      if (!isNaN(num) && num >= 0) {
        setOutput(Math.sqrt(num));
      } else {
        setOutput('Invalid Input');
      }
    } else if (value === 'sin') {
      // Handle the sine function
      const num = parseFloat(input);
      if (!isNaN(num)) {
        setOutput(Math.sin(num));
      } else {
        setOutput('Invalid Input');
      }
    } else if (value === 'cos') {
      // Handle the cosine function
      const num = parseFloat(input);
      if (!isNaN(num)) {
        setOutput(Math.cos(num));
      } else {
        setOutput('Invalid Input');
      }
    } else if (value === 'log') {
      // Handle the logarithm function
      const num = parseFloat(input);
      if (!isNaN(num) && num > 0) {
        setOutput(Math.log10(num));
      } else {
        setOutput('Invalid Input');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleKeyboardInput = (event) => {
    // Check if the key pressed is a number, decimal point, or an operator
    if (/^[0-9./*+-]$/.test(event.key)) {
      setInput(input + event.key);
    } else if (event.key === 'Enter') {
      // Handle Enter key as the equals sign
      handleButtonClick('=');
    }
  };

  // Attach the keydown event listener to the whole document
  document.addEventListener('keydown', handleKeyboardInput);

  return (
    <div className="w-1/4 mx-auto mt-10 bg-blue-600 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl mb-4">Scientific Calculator</h1>
      <input
        type="text"
        value={input}
        className="w-full mb-4 p-2 rounded-md"
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', '√', 'sin', 'cos', 'log'].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className="p-2 text-lg bg-gray-300 rounded-md hover:bg-gray-400"
          >
            {button}
          </button>
        ))}
      </div>
      <input
        type="text"
        value={output}
        className="w-full mt-4 p-2 rounded-md"
        readOnly
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
