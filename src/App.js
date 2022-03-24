import './App.css';
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <Clock local="bn-BD">Present Time</Clock>
      <Test></Test>
    </div>
  );
}


function Test() {
  return (
    <div>
      <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>This is test component</h1>
    </div>
  )
}
export default App;
