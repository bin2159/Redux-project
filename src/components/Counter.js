import classes from "./Counter.module.css";
import {counterActions} from '../store/index'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch=useDispatch()
  console.log(useSelector)
  const counter = useSelector(state => state.counter)
  const show=useSelector(state=>state.showState)
  const increment=()=>{
    dispatch(counterActions.increment())
  }
  const incrementBy5=()=>{
    dispatch( counterActions.incrementBy5(5))
  }
  const decrementBy5=()=>{
    dispatch(counterActions.decrementBy5(5))
  }
  const decrement=()=>{
    dispatch( counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
         <button onClick={incrementBy5}>incrementby5</button>
        <button onClick={decrementBy5}>decrementby5</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
