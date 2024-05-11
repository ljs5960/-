import { useRef, useState } from 'react';

export default function Body() {
  const [text, setText] = useState('');
  const textRef = useRef();

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      console.log(text);
      setText('');
    }
  }

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleChange} />
      <button onClick={handleOnClick}>Complete</button>
    </div>
  )
}