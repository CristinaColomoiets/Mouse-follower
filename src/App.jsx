import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = ()=>{
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(()=>{
    console.log('Effect', enabled)

    const handleMove = (event)=>{

      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }


    // This act cleans effect of event / cleanup
    return() => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
  <>
    <h1>Mouse follower</h1>

    <div 
      className="ball-pointer" 
      style={{transform: `translate(${position.x}px, ${position.y}px)`}}
    >
    </div>

    <button onClick={()=>setEnabled(!enabled)}>
      {enabled ? 'Desactive' : 'Active'}
      follow pointer 
    </button>
  </>
  )
}

function App() {
  return(
    <main>
      <FollowMouse/>
    </main>
  )

}

export default App
