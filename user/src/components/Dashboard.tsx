import "./Dashboard.css";
import Aside from "./Aside";
import Main from "./Main";
const Dashboard = () => {
  return (
    <div className="w-full h-screen flex">
      <Aside />
      <Main />
    </div>
  );
};

export default Dashboard;