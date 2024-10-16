import { useState } from 'react';
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import './App.css'

function App() {
  const [userEmail, setUserEmail] = useState('');

  const handleReceiveData = (data) => {
    setUserEmail(data);
  };

  // The parent (App.jsx) passes the function handleReceiveData as a prop to the Form component.
  // The Form component handles the user input and upon button click, sends the inputted user data back to
  // The parent through that prop. That user input is then passed to the Message.jsx component from App.jsx as an "email" prop.
  // The Message component then displays the data in the "email" prop as long as it exists/has data in it

  return (
    <>
      <div>
        <h1>Hello Techtonica</h1>
        <Form onSendData={handleReceiveData} />
        {!userEmail ? null : <Message email={userEmail} />}
      </div>
    </>
  )
}

export default App
