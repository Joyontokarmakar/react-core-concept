import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const persons = [
    {name: 'Joyonto', desg: 'Frontend'},
    {name: 'Karmakar',desg: 'Web developer'}
  ]

  const products = [
    {name: 'Apple', price: '$190.00'},
    {name: 'Orange', price: '$200.25'},
    {name: 'Water Melon', price: '$300.25'},
    {name: 'Guava', price: '$0.25'}
  ]

  const nayok = ['A', 'b', 'c']

  return (
    <div className="App">
      <header className="App-header">

        <Users></Users>

        <Counter></Counter>

        {products.map( prdct => <Product product={prdct}></Product> )}
        {persons.map( per => <Person person={per}></Person>)}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h1>Dynamic Data: {users.length}</h1>

      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){

  const [count, setCount] = useState(0)
  const btnIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const btnDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={btnDecrease}>Decrease</button>
      <button onClick={btnIncrease}>Increase</button>
    </div>
  )
}

function Product(props){

  const productStyle = {
    border: '1px solid red',
    backgroundColor: 'yellow',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '20px'
  }

  return(
    <div style={productStyle}>
      <h4>{props.product.name}</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>{props.product.price}</p>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){

  const personStyle={
    color:'red',
    border:'1px solid green', 
    padding:'10px',
    margin:'10px'
  }

  return (
    <div style={personStyle}>
      <h1>Name: {props.person.name} </h1>
      <p>Designation: {props.person.desg}</p>
    </div>
  )
}

export default App;
