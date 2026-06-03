import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
        >
          NovaBlog
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>

          <Link to="/create">Create</Link>

          <Link to="/dashboard">Dashboard</Link>

          <button
            onClick={logout}
            className="rounded-xl bg-red-600 px-4 py-2"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;