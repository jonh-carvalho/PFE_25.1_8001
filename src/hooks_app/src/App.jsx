import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <FilhoComponente age={25} />

      <button onClick={() => setCount((count) => count + 111146846000)}>
        count is {count}
      </button>
    </>
  )
}

export default App

function FilhoComponente({ age }) {
  const [idade, setIdade] = useState(age); // Estado interno
  return <p>{age} tem {idade} anos.</p>;
}