import './App.css';
import { useRef, useEffect, useState } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log('Component Update');
    }
  });

  useEffect(() => {
    console.log('Component Mount');
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('Blink!');
    }, 1000);

    return () => {
      console.log('CleanUp!');
      clearInterval(intervalID);
    };
  });

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
