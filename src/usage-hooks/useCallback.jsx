/***
 * useCallback 缓存传入子组件的函数，保证子组件不会因为父组件渲染而重新渲染
 * */

import { memo, useCallback, useState } from 'react';

const Child = memo(({ changeCount }) => {
  console.log('子组件render...');
  return <div>child</div>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const changeCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <>
      <h1>UseCallback</h1>
      count:{count}
      <span className='count-btn' onClick={changeCount}>
        +
      </span>
      <Child changeCount={changeCount} />
    </>
  );
}
