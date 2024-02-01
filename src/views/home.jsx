import { useEffect, useRef, useState } from 'react';
import About from '@/components/about';
import { Button } from '@quarkd/quark-react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('title');
  const aboutRef = useRef(null);
  const increase = () => {
    setCount(count + 1);
    console.log('dom: ', aboutRef);
  };
  useEffect(() => {
    console.log('=====effect');
  }, [title]);
  const changeTitle = title => setTitle(title);
  return (
    <div>
      count:{count}
      <div>
        <Button type='primary' onClick={increase}>
          increase
        </Button>
      </div>
      <About ref={aboutRef} title={title} changeTitle={changeTitle} />
    </div>
  );
}
