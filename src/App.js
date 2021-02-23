// import React, {useState, useEffect} from "react"; 7.2K (gzipped: 3K)
import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = "mahfuz"
const nayoks = ["ana", "ralph", "laura"]
const products = ["photoshop", "editor"]
  var style ={
    color:"red",
    backgroundColor:"yellow"
  }
// eslint-disable-next-line
const productNames = products.map(product => product.name)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>my heading: {name}</h1>
        <p>my first react app</p>
         <Counter></Counter>
         <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <li>
            {nayoks[0]}
          </li>
          <li>
            {nayoks[1]}
          </li>
        </ul>
        <Product name={products[0]}></Product>
        <Person name={nayoks[0]}></Person>
        <Person name="jasim"></Person>
        <Person name="bapparaz"></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>
        increase
      </button>
      <button onClick={() => setCount(count -1)}>
        decrease
      </button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>
        dynamic users: {users.length}
      </h3>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:"1px solid red",
    borderRadius:"5px",
    backgroundColor:"gray",
    height:"200px",
    width:"200px",
    float:"left"
  }
  return(
    <div style={productStyle}>
<h2>name:{props.name}</h2>
<button>buy now</button>
    </div>
  )
}

function Person(props){
  return (<div style={{border:"2px solid red"}}>
<h1>Name: {}</h1>
  <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
