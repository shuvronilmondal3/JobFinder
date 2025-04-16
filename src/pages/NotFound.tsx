
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-blue-600 mb-6">404</h1>
        <p className="text-xl text-foreground mb-8">
          The page you're looking for can't be found.
        </p>
        <Button onClick={() => navigate("/")} size="lg" className="bg-blue-600 hover:bg-blue-700">
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
