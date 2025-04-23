import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Link } from "react-router-dom";

import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Startups from "./pages/Startups";

// Optional: A dummy Dashboard component after login
const Dashboard = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
    <Link
      to="/"
      className="text-blue-600 hover:underline"
    >
      Go to Home
    </Link>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gray-50">
        {/* Optional global nav */}
        <nav className="bg-white shadow px-4 py-3 flex justify-between">
          <Link to="/" className="font-bold text-xl text-blue-600">JobFinder</Link>
          <div className="flex gap-4">
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            <Link to="/jobs" className="text-gray-700 hover:underline">Jobs</Link>
            <Link to="/internships" className="text-gray-700 hover:underline">Internships</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

