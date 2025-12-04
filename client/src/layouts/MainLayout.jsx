import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow dark:bg-gray-800">
        <h1 className="text-xl font-semibold mb-6 dark:text-white">Finance AI</h1>

        <nav className="space-y-3">
          <Link to="/" className="block">Dashboard</Link>
          <Link to="/transactions" className="block">Transactions</Link>
          <Link to="/budgets" className="block">Budgets</Link>
          <Link to="/forecast" className="block">Forecast</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
}
