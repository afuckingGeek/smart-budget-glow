
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, PieChart, TrendingUp, Shield, Smartphone, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: "Smart Analytics",
      description: "Get detailed insights into your spending patterns with beautiful charts and graphs."
    },
    {
      icon: <Brain className="w-12 h-12 text-orange-500" />,
      title: "AI Suggestions",
      description: "Receive personalized recommendations to optimize your budget and savings."
    },
    {
      icon: <PieChart className="w-12 h-12 text-green-500" />,
      title: "Category Tracking",
      description: "Organize expenses by categories and see where your money goes."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Growth Tracking",
      description: "Monitor your financial growth and achieve your savings goals."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Secure & Private",
      description: "Your financial data is encrypted and completely private."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-indigo-500" />,
      title: "Mobile Ready",
      description: "Access your budget anywhere with our responsive design."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg"></div>
          <span className="text-2xl font-bold text-white">Smart Budget</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-white hover:text-purple-300">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6">
              Track Smarter.
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Spend Better.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Take control of your finances with AI-powered insights, beautiful analytics, 
              and smart recommendations that help you build wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-4 text-lg">
                  Start Tracking Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Everything you need to manage your money
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to give you complete control over your finances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* User Experience Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Experience the difference
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instant Insights</h3>
                  <p className="text-gray-400">See your spending patterns at a glance with real-time analytics and beautiful visualizations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Categories</h3>
                  <p className="text-gray-400">Automatically categorize transactions and get insights into your spending habits.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Goal Achievement</h3>
                  <p className="text-gray-400">Set savings goals and get personalized recommendations to reach them faster.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Join thousands of users</h3>
                  <p className="text-gray-300">Who have already taken control of their finances with Smart Budget Tracker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-purple-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to take control?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey to financial freedom today
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-12 py-6 text-lg">
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg"></div>
            <span className="text-2xl font-bold text-white">Smart Budget</span>
          </div>
          <p className="text-gray-400">© 2024 Smart Budget Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
