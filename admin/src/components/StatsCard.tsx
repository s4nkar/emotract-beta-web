const StatsCard = ({ title, value, percentage, color }) => {
  return (
    <div className="bg-white dark:bg-custom-dark dark:text-[#E0E0E0] p-4 shadow-md rounded-lg">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">{value}</p>
        <span className={`text-sm ${color}`}>{percentage}</span>
      </div>
    </div>
  );
};

export default StatsCard;
