import { Home, MapPin, Utensils, History } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Attractions",
    to: "/attractions",
    icon: <MapPin className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual page when created
  },
  {
    title: "Cuisine",
    to: "/cuisine",
    icon: <Utensils className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual page when created
  },
  {
    title: "History",
    to: "/history",
    icon: <History className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual page when created
  },
];
