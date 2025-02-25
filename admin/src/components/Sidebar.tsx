import { FaChartPie, FaBox, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5 shadow-md">
      <h2 className="text-xl font-bold">Menu</h2>
      <ul className="mt-4 space-y-4">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            <FaChartPie /> Dashboards
          </Link>
        </li>
        <li>
          <Link
            to="/user-list"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            <FaUsers /> Users
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            <FaBox /> UI Components
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            <FaCog /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
