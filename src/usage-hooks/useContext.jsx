import { createContext, useContext, useEffect, useState } from 'react';

const UseContext = createContext('userinfo');

export default function () {
  const [count, setCount] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 10); // setCount(prev => prev + 10);
    }, 1000);

    return () => {
      console.log('clean effect');
    };
  }, []); // 没有依赖项会无限循环

  const change = [23, 12, 0]; // () => console.log('change');
  return (
    <>
      <h1>useContext</h1>
      <UseContext.Provider value={change}>
        <Child1 />
      </UseContext.Provider>
    </>
  );
}

function Child1() {
  const info = useContext(UseContext);
  console.log('Child1', info);
  return (
    <>
      <h3>Child1</h3>
      {/* <UseContext.Consumer>
        {v => <div>UseContext: {v}</div>}
      </UseContext.Consumer>
      useContext:{info} */}
      <Child2 />
    </>
  );
}
function Child2() {
  const info = useContext(UseContext, 50);
  console.log('Child2', info);
  return (
    <>
      <h3>Child2</h3>
    </>
  );
}
