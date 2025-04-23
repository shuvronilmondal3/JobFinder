
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme"; // Import useTheme hook

import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Startups from "./pages/Startups";
import Login from "./pages/Login"; // Import Login component

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

const App = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-gray-50">
          {/* Dynamic navbar with theme-based styling */}
          <nav className={`
            px-4 py-3 flex justify-between
            ${theme === 'dark' 
              ? 'bg-gray-900 text-white border-gray-800' 
              : 'bg-white text-gray-800 border-gray-200'
            } shadow
          `}>
            <Link 
              to="/" 
              className={`
                font-bold text-xl 
                ${theme === 'dark' 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-blue-600 hover:text-blue-700'
                }
              `}
            >
              JobFinder
            </Link>
            <div className="flex gap-4">
              <Link 
                to="/login" 
                className={`
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-blue-500 hover:text-blue-600'
                  }
                `}
              >
                Login
              </Link>
              <Link 
                to="/jobs" 
                className={`
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                Jobs
              </Link>
              <Link 
                to="/internships" 
                className={`
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                Internships
              </Link>
              <Link 
                to="/startups" 
                className={`
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                Startups
              </Link>
              <Link 
                to="/settings" 
                className={`
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                Settings
              </Link>
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
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
