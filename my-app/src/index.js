// Import the react and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = "Click Me!"
  const labelText = "Enter Name:"

  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
