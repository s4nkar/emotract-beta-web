import React, { useRef, useState } from "react";

const VideoMessage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Toggle fullscreen
  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className="flex items-start gap-2.5 w-full max-w-[320px]">
      {/* Profile Picture */}
      <img
        className="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        alt="Sender"
      />

      {/* Message Bubble (Sharp Top-Left Corner, Other Rounded) */}
      <div 
        className="flex flex-col w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
        style={{ 
          borderTopLeftRadius: "0px", 
          borderTopRightRadius: "20px", 
          borderBottomLeftRadius: "20px", 
          borderBottomRightRadius: "20px" 
        }}
      >
        {/* Sender Name & Timestamp */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">3:42</span>
        </div>

        {/* Video Container */}
        <div className="relative w-full rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            muted={isMuted}
          ></video>

          {/* Controls: Mute & Fullscreen */}
          <div className="absolute bottom-2 left-2 flex gap-2">
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMessage;
