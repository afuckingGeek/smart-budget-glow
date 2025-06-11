
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">404</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-800">Page Not Found</h1>
            <p className="text-slate-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <Link to="/dashboard">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white">
                <Home className="w-4 h-4 mr-2" />
                Go to Dashboard
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
