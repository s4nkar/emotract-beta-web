import Header from "@/components/header/Header";
import Aside  from "../components/aside/Aside";
import ContactList from "@/components/contact/ContactList";
import ChatSection from "@/components/chat/ChatSection";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <Aside />
      <div className='w-full h-full flex flex-col'>
      <Header/>
      <div className='flex'>
        <ContactList/>
        <ChatSection/>
      </div>
    </div>
    </div>
  );
};

export default Home;