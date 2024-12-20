import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrementfun, incrementfun } from './component/CounterAction'
const Counter = () => {
    const count=useSelector((i)=>i.count)
    const dispatch=useDispatch()
    const increment=()=>{
        dispatch(incrementfun())
    }
    const decrement=()=>{
        dispatch(decrementfun())
    }
  return (
    <div>
        <h1>Hello Redux</h1>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter