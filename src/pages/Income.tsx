
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, TrendingUp, DollarSign, Briefcase, PiggyBank } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from "@/components/Sidebar";
import { Link } from "react-router-dom";

const Income = () => {
  const incomeData = [
    { date: '1st Jan', amount: 11200 },
    { date: '4th Jan', amount: 9500 },
    { date: '6th Jan', amount: 9200 },
    { date: '7th Jan', amount: 13500 },
    { date: '8th Jan', amount: 1800 },
    { date: '9th Jan', amount: 8200 },
    { date: '10th Jan', amount: 10800 },
    { date: '11th Jan', amount: 12100 },
    { date: '13th Jan', amount: 10500 },
    { date: '12th Feb', amount: 12800 }
  ];

  const incomeSources = [
    {
      id: 1,
      source: "Salary",
      amount: 12000,
      date: "12th Feb 2025",
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-green-500",
      growth: "+5.2%"
    },
    {
      id: 2,
      source: "Interest from Savings",
      amount: 8600,
      date: "13th Jan 2025",
      icon: <PiggyBank className="w-5 h-5" />,
      color: "text-blue-500",
      growth: "+12.4%"
    },
    {
      id: 3,
      source: "E-commerce Sales",
      amount: 11900,
      date: "10th Jan 2025",
      icon: <DollarSign className="w-5 h-5" />,
      color: "text-purple-500",
      growth: "+8.7%"
    },
    {
      id: 4,
      source: "Graphic Design",
      amount: 2400,
      date: "10th Jan 2025",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-orange-500",
      growth: "+15.3%"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Income Overview</h1>
              <p className="text-slate-600">Track your earnings over time and analyze your income trends.</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Link to="/add-transaction">
                <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Income
                </Button>
              </Link>
            </div>
          </div>

          {/* Income Chart */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Income Overview</CardTitle>
              <p className="text-slate-600">Track your earnings over time and gain insights into where your money goes.</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Bar 
                      dataKey="amount" 
                      fill="url(#incomeGradient)" 
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Income Sources */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">Income Sources</CardTitle>
                <p className="text-slate-600">Breakdown of your income by source</p>
              </div>
              <Button variant="outline" size="sm" className="text-purple-600 hover:text-purple-700">
                Download Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {incomeSources.map((source) => (
                  <div key={source.id} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-slate-100 ${source.color}`}>
                        {source.icon}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{source.source}</p>
                        <p className="text-sm text-slate-600">{source.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">
                        +${source.amount.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-500">{source.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Income;
