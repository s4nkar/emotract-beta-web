const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center dark:bg-custom-dark dark:text-[#E0E0E0] bg-white shadow p-4">
      <h1 className="text-2xl font-semibold">Minimal Dashboard</h1>
      <button className="bg-blue-500 dark:bg-[#09050b] dark:bg-dark dark:text-[#E0E0E0] text-white px-4 py-2 rounded">
        Select Period
      </button>
    </div>
  );
};

export default DashboardHeader;
