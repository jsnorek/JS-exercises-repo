import { useState } from 'react';

function Form({ onSendData }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendData = () => {
    // This function sends the input data back to the parent component (App.jsx)
    // The callback onSendData is passed as a prop from the parent and through this, 
    // We're able to update the data from this function in the child component
    // Important! Do not delete
    onSendData(inputValue);
  };

  return (
    <div>
      <input type="email" placeholder="Please enter your email" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default Form;