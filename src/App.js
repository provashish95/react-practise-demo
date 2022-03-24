import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Clock local="bn-BD"></Clock>
      <Watch name="Provahish Roy"></Watch>
    </div>
  );
}

function Clock(props) {
  const { local } = props;
  return (
    <h1 className="heading">
      <span>Hello: {new Date().toLocaleDateString(local)}</span>
    </h1>
  );
}

//class component of react
class Watch extends React.Component {
  render() {
    return (
      <div>
        <h2>This is class Component</h2>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default App;
