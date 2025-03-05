import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import { DataTableDemo } from "./pages/table";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen w-full">
        {/* Sidebar (Always Visible) */}
        <Sidebar />

        {/* Main Content Area */}
        <div
          style={{ width: "calc(100vw - 10rem)" }}
          className="flex flex-col flex-1 dark:bg-custom-dark dark:text-[#E0E0E0]"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-list" element={<DataTableDemo />} />
            <Route path="/analytics/:id" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
