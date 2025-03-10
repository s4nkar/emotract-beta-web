import React, { useState, useRef } from "react";

const MessageBubble = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleTimeUpdate = () => {
    const currentProgress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  return (
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        alt="Jese image"
      />
      <div className="flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            11:46
          </span>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={togglePlayPause}
            className="p-2 text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {isPlaying ? "⏸" : "▶️"}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
          />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {Math.floor(progress)}%
          </span>
        </div>
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    </div>
  );
};

export default MessageBubble;