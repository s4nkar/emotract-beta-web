import React from "react";

const ImageMessage = () => {
  return (
    <div className="flex items-start gap-2.5">
      {/* Profile Image */}
      <img
        className="w-8 h-8 rounded-full"
        src="https://pbs.twimg.com/profile_images/1283799543935569929/Q1xLjs0w_400x400.jpg"
        alt="Bonnie Green"
      />

      {/* Message Bubble */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          
          {/* Sender Name and Timestamp */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>

          {/* Message Text */}
          <p className="text-sm font-normal text-gray-900 dark:text-white">
            This is the new office ❤️
          </p>

          {/* Image Grid */}
          <div className="grid gap-4 grid-cols-2 my-2.5">
            {["/docs/images/blog/image-1.jpg", "/docs/images/blog/image-2.jpg", "/docs/images/blog/image-3.jpg"].map(
              (src, index) => (
                <div key={index} className="group relative">
                  <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <button className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                      {/* Download Icon */}
                      <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                        />
                      </svg>
                    </button>
                  </div>
                  <img src={src} className="rounded-lg" alt={`Image ${index + 1}`} />
                </div>
              )
            )}

            {/* More Images Placeholder */}
            <div className="group relative">
              <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-xl font-medium text-white">+7</span>
              </button>
              <img src="https://pbs.twimg.com/profile_images/1283799543935569929/Q1xLjs0w_400x400.jpg" className="rounded-lg" alt="More images" />
            </div>
          </div>

          {/* Message Status & Save Button */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
            <button className="text-sm text-blue-700 dark:text-blue-500 font-medium inline-flex items-center hover:underline">
              {/* Save All Icon */}
              <svg
                className="w-3 h-3 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
              Save all
            </button>
          </div>
        </div>
      </div>

      {/* More Options Button */}
      <button
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
    </div>
  );
};

export default ImageMessage;
