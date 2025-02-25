import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import UserList from "./pages/Userlist";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen w-full">
        {/* Sidebar (Always Visible) */}
        <Sidebar />

        {/* Main Content Area */}
        <div
          style={{ width: "calc(100vw - 16rem)" }}
          className="flex flex-col flex-1"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-list" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
