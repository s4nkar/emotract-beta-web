import './App.css'
import Aside from './components/Aside'
import Main from './components/Main'
import Chatlist from './components/Chatlist'
function App() {
  return (
    <div className='w-full h-screen flex'>
      <Aside/>
      <Main/>
      <Chatlist/>
    </div>
  )
}

export default App
