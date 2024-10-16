function Message({email}) {
  
    return (
      <div>
        {/* The email prop is passed from parent (App.jsx) to child which allows this component to
        access the data in "email" and display it here */}
        {/*Important! Do not delete */}
        {!email ? null : <p> Thank you for submiting your email: {email} </p>}
      </div>
    );
  }
  
  export default Message;