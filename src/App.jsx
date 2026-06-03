import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="/post/:id"
            element={<PostDetails />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;