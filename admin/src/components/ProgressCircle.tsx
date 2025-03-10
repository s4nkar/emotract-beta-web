const ProgressCircle = ({ percent }) => {
  return (
    <div className="bg-white dark:bg-custom-dark dark:text-[#E0E0E0] p-4 shadow-md rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-bold">Income</h3>
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-200 stroke-current"
            strokeWidth="4"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
          />
          <path
            className="text-blue-500 stroke-current"
            strokeWidth="4"
            strokeDasharray={`${percent}, 100`}
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {percent}%
        </span>
      </div>
    </div>
  );
};

export default ProgressCircle;
