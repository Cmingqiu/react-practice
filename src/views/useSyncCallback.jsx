import { useEffect, useState, useCallback } from 'react';
const useSyncCallback = callback => {
  const [proxyState, setProxyState] = useState({ current: false });

  const Func = useCallback(() => {
    setProxyState({ current: true });
  }, [proxyState]);

  useEffect(() => {
    console.log(1, proxyState.current, new Date().toLocaleString());
    if (proxyState.current === true) setProxyState({ current: false });
  }, [proxyState]);

  useEffect(() => {
    console.log(2, proxyState.current, new Date().toLocaleString());
    proxyState.current && callback();
  });

  return Func;
};

export default function () {
  const [count, setCount] = useState(10);
  const effect = useSyncCallback(() => console.log(count));
  const clickHandler = () => {
    setCount(prev => prev + 10);
    effect();
  };
  return (
    <>
      count:{count} <br />
      <button onClick={clickHandler}>+10</button>
    </>
  );
}
