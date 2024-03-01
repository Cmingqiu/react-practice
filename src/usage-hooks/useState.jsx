import { Button } from '@quarkd/quark-react';
import { useEffect, useState } from 'react';

function axios() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: 'xx',
          age: 10
        }
      ]);
    }, 3000);
  });
}

export default function () {
  const fetchData = async () => {
    console.log('fetch');
    axios()
      .then(res => {
        return res;
      })
      .catch(err => null);
  };
  const [data, setData] = useState(fetchData);

  const [arr, setArr] = useState([0]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    // console.log(arr);
  }, [arr]);
  const change = () => {
    Promise.resolve()
      .then(() => {
        setArr(prev => [...prev, 1]);
        console.log('1', arr);
      })
      .then(() => {
        setArr(prev => [...prev, 2]);
        console.log('2', arr);
      });

    /*  setNum(prev => prev + 1);
    console.log('1----', num);
    setNum(prev => prev + 1);
    console.log('2----', num); */
  };
  return (
    <>
      <h1>useState</h1>
      异步请求数据:{JSON.stringify(data)}
      <Button type='success' onClick={change}>
        改变{num}
      </Button>
    </>
  );
}

/**
 * 一个自定义 hook，提供 setState 功能，但与 class 组件中的 setState 类似，
 * 它允许合并状态更新，而不是替换它。
 *
 * @param {Object} initialState - 初始状态，默认为空对象。
 * @returns {Array} 返回一个数组，第一个元素是当前状态，第二个元素是合并状态的函数。
 */
export const useSetState = (initialState = {}) => {
  // 使用 useState hook 设置初始状态
  const [state, setState] = useState(initialState);
  // 定义一个合并状态的函数
  const setMergeState = useCallback(patch => {
    setState(prevState => ({
      ...prevState, // 保留之前的状态
      ...(typeof patch === 'function' ? patch(prevState) : patch)
    }));
  }, []); // 使用空依赖数组，确保该回调函数不会重新创建
  // 返回当前状态和合并状态的函数
  return [state, setMergeState];
};
