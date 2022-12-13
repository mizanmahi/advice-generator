import { useEffect } from 'react'
import './App.css'
import Advice from './components/Advice'

function App() {
  
  // useEffect(() => {
  //   document.documentElement.classList.add('dark')
  // }, [])

  return (
    <div className="h-screen w-full dark:bg-darkBlue bg-slate-100 flex items-center justify-center px-4">
        <Advice />
    </div>
  )
}

export default App
