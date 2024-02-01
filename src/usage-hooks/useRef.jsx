/**
 * useRef有2个作用；
 * 1. 获取dom节点以及自定义组件实例
 * 2. 缓存状态变化前的值
 */

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from 'react';

// 子组件
const UseRefChild = forwardRef((props, ref) => {
  const childFn = () => console.log('child fn');

  useImperativeHandle(ref, () => ({
    childFn
  }));
  return (
    <>
      <h2>useRef-child</h2>
    </>
  );
});

export default function UseRef() {
  const [count, setCount] = useState(10);
  const prevCountRef = useRef(30);
  const changeCount = () => {
    prevCountRef.current = count;
    setCount(count + 1);
  };
  /*  useEffect(() => {
    prevCountRef.current = count;
  }); */

  const ref = useRef(null);
  const handleClick = () => {
    ref.current.childFn();
  };
  return (
    <>
      <h1 onClick={handleClick}>useRef</h1>
      <UseRefChild ref={ref}></UseRefChild>
      <hr />
      <p> count:{count}</p>
      <p>prevCountRef:{prevCountRef.current}</p>

      <span className='count-btn' onClick={changeCount}>
        +
      </span>
    </>
  );
}
