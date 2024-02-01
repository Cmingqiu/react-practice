/**
 * useReducer用来统一管理状态，功能类似useState
 *  */
import { useState, useReducer } from 'react';

const countReducer = (count, { action }) => {
  switch (action) {
    case 'increase':
      return count + 1;
    case 'decrease':
      return count - 1;
    default:
      throw new Error('...');
  }
};

export default function CompUseReducer() {
  /* const [count, setCount] = useState(10);
  const changeCount = flag => {
    console.log(flag);
    setCount(flag === 'increase' ? count + 1 : count - 1);
  }; */
  const [count, dispatch] = useReducer(countReducer, 10);

  return (
    <div className='use-reducer'>
      <h1>useReducer</h1>
      <span
        className='count-btn'
        onClick={() =>
          dispatch({
            action: 'increase'
          })
        } /* {changeCount.bind(null, 'increase')} */
      >
        +
      </span>
      <span>{count}</span>
      <span
        className='count-btn'
        onClick={() =>
          dispatch({
            action: 'decrease'
          })
        } /* {changeCount.bind(null, 'decrease')} */
      >
        -
      </span>
    </div>
  );
}
