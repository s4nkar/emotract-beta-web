import PropTypes from "prop-types";

const StatsCard = ({ title, value, percentage, color }) => {
  // Function to determine percentage color dynamically
  const getPercentageColor = () => {
    if (!percentage) return "text-gray-500";
    return percentage.includes("-") ? "text-red-500" : "text-green-500";
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">{value}</p>
        <span className={`text-sm ${color || getPercentageColor()}`}>{percentage}</span>
      </div>
    </div>
  );
};

// Define Prop Types
StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.string,
  color: PropTypes.string,
};

// Default Props to prevent errors if props are missing
StatsCard.defaultProps = {
  title: "Title",
  value: "0",
  percentage: "0%",
  color: "",
};

export default StatsCard;
