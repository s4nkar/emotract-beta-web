import { Phone, SendHorizonal, Smile, Video, ChevronLeft } from "lucide-react";
import { Input } from "../ui/input";
import ChatScreen from "./ChatScreen";
import { Link } from "react-router-dom";
import Voicemessage from "./Voicemessage";
import PdfFile from "./PdfFile";
import VideoMessage from "./VideoMessage";
import ImageMessage from "./ImageMessage";

interface chatSectionProps {
  id?: string;
}

const contactData = [
  {
    id: '1',
    name: 'Amal',
    last_message: 'See you soon!',
    message_count: 10,
    time: '18:03',
  },
  {
    id: '2',
    name: 'Sankar',
    last_message: 'wsp',
    message_count: 2,
    time: '18:03',
  },
  {
    id: '3',
    name: 'Ansari',
    last_message: 'erachi veno',
    message_count: 0,
    time: '18:03',
  },
  {
    id: '4',
    name: 'Lison',
    last_message: 'test message',
    message_count: 7,
    time: '18:03',
  },
];

const ChatSection = ({ id }: chatSectionProps) => {
  const [userProfile] = contactData.filter((data) => id === data.id);

  return (
    <div className="flex bg-white dark:bg-custom-dark flex-col justify-center items-center w-full pt-0 px-8 dark:text-white" style={{ height: "calc(100vh - 5rem)" }}>
      
      {/* Header */}
      <div className="p-4 border-b-2 dark:border-b dark:border-b-[#2d2d2d] relative flex items-center justify-between h-[10%] w-full">
        <div className="flex items-center">
          <Link to="/chat-list" className="p-0 flex justify-center items-center md:hidden absolute -left-4">
            <ChevronLeft className="text-gray-600 cursor-pointer" />
          </Link>
          <img
            src="https://pbs.twimg.com/media/E8HSa0aUYAM1_xS.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-[#E0E0E0]">{userProfile?.name}</h3>
            <span className="text-green-500 text-xs">Online</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="w-9 h-9 flex justify-center items-center text-gray-500 text-xl">
            <Video />
          </button>
          <button className="w-9 h-9 flex justify-center items-center text-gray-500 text-xl">
            <Phone />
          </button>
        </div>
      </div>

      {/* Encryption message */}
      <div className="text-yellow-900 p-3 rounded-lg text-center text-sm w-full my-2">
        🔒 Messages you send to this chat and calls are now secured with end-to-end encryption. Tap for more info.
      </div>

      {/* Chat Area */}
      <div className="h-[80%] w-full py-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#f3f4f6] scrollbar-track-[#fff] dark:scrollbar-thumb-[#181c14] dark:scrollbar-track-[#000] flex flex-col">
        <ChatScreen position="left" />
        <Voicemessage/>
        <br />
        <PdfFile/>
        <br />
        <VideoMessage/>
        <br />
       <ImageMessage/>
        <ChatScreen position="right" />
        <ChatScreen position="left" />
        <ChatScreen position="right" />
        <ChatScreen position="left" />
        <ChatScreen position="right" />
        <ChatScreen position="left" />
        <ChatScreen position="right" />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t-2 dark:border-t dark:border-t-[#414141] flex items-center space-x-3 h-[10%] w-full">
        <Input
          type="text"
          placeholder="Type your message here..."
          className="flex-grow border-none px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <button className="text-gray-500 text-xl">
          <Smile />
        </button>
        <button className="text-gray-500 text-xl">
          <SendHorizonal />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
