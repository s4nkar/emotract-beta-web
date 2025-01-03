import { Input } from "../ui/input";

const ChatSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full pt-0 px-8" style={{ height: "calc(100vh - 5rem)" }}>
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between h-[15%] w-full">
          <div className="flex items-center">
            <img
              src="https://pbs.twimg.com/media/E8HSa0aUYAM1_xS.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-gray-800">John Doe</h3>
              <span className="text-green-500 text-xs">Online</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="w-8 h-8 flex justify-center items-center text-blue-600 text-xl">
              📹
            </button>
            <button className="w-8 h-8 flex justify-center items-center text-blue-600 text-xl">
              📞
            </button>
          </div>
        </div>
        {/* Chat Area */}
        <div className=" flex-col p-4 h-[70%] overflow-y-scroll  overflow-hidden w-full custom-scroll-chat-section">
        <div className="flex items-start mb-4">
            <img
              src="https://i.redd.it/062aatvsysja1.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2">
              <div className="bg-gray-200 px-3 py-2 rounded-lg">
                <p className="text-sm text-gray-800">Hello!</p>
              </div>
              <span className="text-gray-500 text-[0.7rem] ml-2">12:48</span>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex items-end justify-end mb-4">
            <div className="bg-blue-500 text-white px-3 py-2 rounded-lg max-w-xs">
              <p className="text-sm">Hi, how are you?</p>
            </div>
            <span className="text-gray-500 text-[0.7rem] ml-2 b">12:45</span>
          </div>

          {/* Additional Messages */}
          <div className="flex items-start mb-4">
            <img
              src="https://i.redd.it/062aatvsysja1.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2">
              <div className="bg-gray-200 px-3 py-2 rounded-lg">
                <p className="text-sm text-gray-800">What about you?</p>
              </div>
              <span className="text-gray-500 text-[0.7rem] ml-2">12:49</span>
            </div>
          </div>

          <div className="flex items-end justify-end mb-4">
            <div className="bg-blue-500 text-white px-3 py-2 rounded-lg max-w-xs">
              <p className="text-sm">I'm good, thanks for asking!</p>
            </div>
            <span className="text-blue-200 text-[0.7rem] ml-2">12:50</span>
          </div>
        </div>  
          {/* Message 1 */}
          

        {/* Input Area */}
        <div className="p-4 border-t flex items-center space-x-3 h-[10%] w-full">
          <Input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow border-none px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="text-blue-500 text-xl">
            😊
          </button>
          <button className="text-blue-500 text-xl">
            ➡️
          </button>
        </div>
    </div>
  );
};

export default ChatSection;
