import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="border-b bg-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <MenuIcon className="h-5 w-5" />
        </Button>
        <Link to="/" className="text-2xl font-bold text-gray-800">Dhanniti</Link>
      </div>

      <nav className="flex items-center">
        <ul className="flex gap-6">
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/orders">Orders</NavLink></li>
          <li><NavLink to="/holdings">Holdings</NavLink></li>
          <li><NavLink to="/positions">Positions</NavLink></li>
          <li><NavLink to="/funds">Funds</NavLink></li>
          <li><NavLink to="/apps">Apps</NavLink></li>
        </ul>
        <div className="ml-6 flex items-center gap-4">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-200 text-xs">
            ZU
          </div>
          <span className="text-sm font-medium">USERID</span>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  // Check if current path matches the link's path
  const isActive = window.location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium ${isActive ? 'text-red-500' : 'text-gray-700 hover:text-gray-900'}`}
    >
      {children}
    </Link>
  );
};

export default Header;
