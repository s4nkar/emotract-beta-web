import DashboardHeader from "../components/DashboardHeader";
import StatsCard from "../components/StatsCard";
import ChartComponent from "../components/ChartComponent";
import ProgressCircle from "../components/ProgressCircle";

const Dashboard = () => {
  return (
    <div
      style={{ width: "calc(100vw - 16rem)" }}
      className="flex flex-col flex-1 p-4"
    >
      <DashboardHeader />

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-between mt-4">
        <StatsCard
          title="New Accounts"
          value="234%"
          percentage="+58"
          color="text-green-500"
        />
        <StatsCard
          title="Total Expenses"
          value="71%"
          percentage="-62"
          color="text-red-500"
        />
        <StatsCard
          title="Company Value"
          value="$1.45M"
          percentage="+72"
          color="text-yellow-500"
        />
        <StatsCard
          title="New Employees"
          value="+34 hires"
          percentage="+81"
          color="text-green-500"
        />
      </div>

      {/* Chart and Progress */}
      <div className="flex flex-wrap mt-6 gap-4">
        <div className="flex-1 min-w-[60%]">
          <ChartComponent />
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 min-w-[250px]">
          <ProgressCircle percent={75} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
