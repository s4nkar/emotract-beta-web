import ChatSection from './ChatSection'
import ContactList from './ContactList'
import Header from './Header'


function Main() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header/>
      <div className='flex'>
        <ContactList/>
        <ChatSection/>
      </div>
    </div>
  )
}

export default Main