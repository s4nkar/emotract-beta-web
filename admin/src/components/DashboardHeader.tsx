const DashboardHeader = () => {
    return (
      <div className="flex justify-between items-center bg-white shadow p-4">
        <h1 className="text-2xl font-semibold">Minimal Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Select Period</button>
      </div>
    );
  };
  
  export default DashboardHeader;
  