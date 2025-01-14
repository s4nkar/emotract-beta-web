import Header from "@/components/header/Header";
import Aside  from "../components/aside/Aside";
import ContactList from "@/components/contact/ContactList";
import ChatSection from "@/components/chat/ChatSection";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-screen flex">
      <Aside />
      <div className='w-full h-full flex flex-col'>
      <Header/>
      <div className='flex'>
        <ContactList/>
        <ChatSection id={id}/>
      </div>
    </div>
    </div>
  );
};

export default Home;