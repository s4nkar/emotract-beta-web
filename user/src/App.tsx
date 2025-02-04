import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import SignIn from "./pages/auth/SignIn";
import Home from "./pages/Home";
import NotFound from "./components/not-found";
import UserProfilePage from "./components/user-profile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ContactListSm from "./pages/contact/ContactListSm";

export default function App() {
  return (
    <>
      <Router>
      <Routes>
        {/* Public Routes */}
        <Route index element={<SignIn />} />
        <Route path="*" element={<NotFound />} />

        {/* Group Protected Routes */}
          <Route path="home/:id" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/chat-list" element={<ProtectedRoute><ContactListSm/></ProtectedRoute>} />
          <Route path="user-profile" element={<ProtectedRoute><UserProfilePage /></ProtectedRoute>} />

      </Routes>
      </Router>
    </>
  );
}
