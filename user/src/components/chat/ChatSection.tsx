const ChatSection = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gray-100 h-full ">
      <div className="w-full h-full bg-white rounded-lg shadow-lg" style={{ }}>
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/60"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">Username</h3>
              <span className="text-green-500 text-lg">Online</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="w-10 h-10 flex justify-center items-center text-blue-600 text-2xl">
              📹
            </button>
            <button className="w-10 h-10 flex justify-center items-center text-blue-600 text-2xl">
              📞
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-6 space-y-6 overflow-y-auto" style={{ maxHeight: "60vh" }}>
          {/* Message 1 */}
          <div className="flex items-start">
            <img
              src="https://via.placeholder.com/60"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4 bg-gray-100 px-6 py-4 rounded-lg">
              <p className="text-lg">Hello !</p>
              <span className="text-gray-500 text-sm block text-right">12:44</span>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex items-end justify-end">
            <div className="bg-blue-500 text-white px-6 py-4 rounded-lg">
              <p className="text-lg">Hi, how are you?</p>
              <span className="text-blue-200 text-sm block text-right">12:45</span>
            </div>
          </div>

          {/* Message 3 */}
          <div className="flex items-start">
            <img
              src="https://via.placeholder.com/60"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4 bg-gray-100 px-6 py-4 rounded-lg">
              <p className="text-lg">
                ommbbb
              </p>
              <span className="text-gray-500 text-sm block text-right">12:48</span>
            </div>
          </div>

          {/* Message 4 */}
          <div className="flex items-end justify-end">
            <div className="bg-blue-500 text-white px-6 py-4 rounded-lg">
              <p className="text-lg">
                ommbbb
              </p>
              <span className="text-blue-200 text-sm block text-right">12:50</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button className="text-blue-500 text-2xl">
            😊
          </button>
          <button className="text-blue-500 text-2xl">
            ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
