import { FaChartPie, FaBox, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Sidebar = () => {
  return (
    <div className="w-40 h-screen bg-gray-100 relative p-5 shadow-md dark:bg-[#09050b] dark:bg-dark dark:text-[#E0E0E0]">
      <h2 className="text-xl font-bold">Menu</h2>
      <ul className="mt-4 space-y-4">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 dark:text-[#E0E0E0] hover:text-blue-500 cursor-pointer"
          >
            <FaChartPie /> Dashboards
          </Link>
        </li>
        <li>
          <Link
            to="/user-list"
            className="flex items-center gap-2 text-gray-700 dark:text-[#E0E0E0] hover:text-blue-500 cursor-pointer"
          >
            <FaUsers /> Users
          </Link>
        </li>
        <li>
          <Link
            to="/analytics/0"
            className="flex items-center gap-2 text-gray-700 dark:text-[#E0E0E0] hover:text-blue-500 cursor-pointer"
          >
            <FaBox /> Analytics
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 absolute bottom-2 text-gray-700 dark:text-[#E0E0E0] hover:text-blue-500 cursor-pointer">
        <FaCog /> Settings
      </div>
    </div>
  );
};

export default Sidebar;
