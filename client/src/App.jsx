import { useState } from 'react'
import './App.css'
import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'


function App() {
  const [chatVisible, setChatVisible] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <div className='App'>
      {
        chatVisible ? <Chat socket={socket}/> : <Join setSocket={setSocket} setChatVisible={setChatVisible} />
      }
    </div>
  )
}

export default App
