import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current.value !== "") {
      setItems([...items, ref.current.value]);
      ref.current.value = "";
    }
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (ref.current.value !== "") {
        setItems([...items, ref.current.value]);
        ref.current.value = "";
      }
    }
  }

  return (
    <div className='outer'>
      <div className='inner'>
        <h1>Item Lists</h1>
        <input type="text" ref={ref} onKeyDown={handleKeyDown}/>
        {items.length > 0 && items?.map((item, idx) => (
          <ul key={idx}> {item} </ul>
        ))}
        <button onClick={handleClick}>Add Item</button>
      </div>
    </div>
  )
}

export default App
