
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  LogOut,
  User,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: "/dashboard",
      active: location.pathname === "/dashboard"
    },
    {
      title: "Income",
      icon: <TrendingUp className="w-5 h-5" />,
      href: "/income",
      active: location.pathname === "/income"
    },
    {
      title: "Expenses",
      icon: <TrendingDown className="w-5 h-5" />,
      href: "/expenses",
      active: location.pathname === "/expenses"
    },
    {
      title: "History",
      icon: <Calendar className="w-5 h-5" />,
      href: "/history",
      active: location.pathname === "/history"
    }
  ];

  return (
    <div className={cn(
      "bg-white border-r border-slate-200 h-screen transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-800">Smart Budget</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2"
          >
            {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-orange-500 text-white">
              MW
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div>
              <p className="font-semibold text-slate-800">Mike William</p>
              <p className="text-sm text-slate-600">Personal Account</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>
                <Button
                  variant={item.active ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start transition-all duration-200",
                    item.active 
                      ? "bg-gradient-to-r from-purple-500 to-orange-500 text-white hover:from-purple-600 hover:to-orange-600" 
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
                    isCollapsed ? "px-3" : "px-4"
                  )}
                >
                  {item.icon}
                  {!isCollapsed && <span className="ml-3">{item.title}</span>}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200">
        <Link to="/">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-slate-700 hover:text-slate-900 hover:bg-slate-100",
              isCollapsed ? "px-3" : "px-4"
            )}
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
