import logo from './logo.svg';
import './App.css';

function App() {

  const names = ['joyonto Karmakar', 'akm dkfg'];
  const desgs = ['student', 'job holder']
  return (
    <div className="App">
      <header className="App-header">
        <Person name={names[0]} desg={desgs[0]}></Person>
        <Person name={names[1]} desg={desgs[1]}></Person>
      </header>
    </div>
  );
}

function Person(personProperty){

  const personStyle={
    color:'red',
    border:'1px solid green', 
    padding:'10px',
    margin:'10px'
  }

  return (
    <div style={personStyle}>
      <h1>Name: {personProperty.name} </h1>
      <p>Designation: {personProperty.desg}</p>
    </div>
  )
}

export default App;
