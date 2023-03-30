import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFound";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>Goodbye</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}