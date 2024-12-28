import './App.css'
import Aside from './components/Aside'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <div className='w-full h-screen flex'>
      <Aside/>
      <Main/>
      <Header/>
    </div>
  )
}

export default App
