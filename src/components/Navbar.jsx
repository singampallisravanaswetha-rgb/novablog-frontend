import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          NovaBlog
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>

          {token ? (
            <>
              <Link to="/create">Create</Link>

              <Link to="/dashboard">
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="rounded bg-red-600 px-4 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;