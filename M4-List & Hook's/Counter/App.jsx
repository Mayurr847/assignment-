import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListComponnent from './ListComponnent';
import TodoComponent from './TodoComponent';

const Counter =() => {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
       <div className="card">
        <p className='txt'>Count:{count}</p>
        <button className = "increment" onClick={increment}>Increment</button>
        <button className = "decrement" onClick={decrement}>Decrement</button>
      </div>
       <ListComponnent/>
       <TodoComponent/>
    </>
  )
}

export default Counter
