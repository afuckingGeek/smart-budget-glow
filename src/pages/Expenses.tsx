
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, ShoppingBag, Car, Utensils, Home } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from "@/components/Sidebar";
import { Link } from "react-router-dom";

const Expenses = () => {
  const expenseData = [
    { date: '2nd Jan', amount: 200 },
    { date: '3rd Jan', amount: 150 },
    { date: '4th Jan', amount: 300 },
    { date: '5th Jan', amount: 250 },
    { date: '6th Jan', amount: 180 },
    { date: '7th Jan', amount: 520 },
    { date: '8th Jan', amount: 420 },
    { date: '9th Jan', amount: 310 },
    { date: '10th Jan', amount: 680 },
    { date: '11th Jan', amount: 590 },
    { date: '12th Jan', amount: 450 },
    { date: '14th Jan', amount: 320 },
    { date: '16th Feb', amount: 380 },
    { date: '17th Feb', amount: 280 }
  ];

  const allExpenses = [
    {
      id: 1,
      category: "Shopping",
      amount: 430,
      date: "17th Feb 2025",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "text-pink-500"
    },
    {
      id: 2,
      category: "Travel",
      amount: 670,
      date: "13th Feb 2025",
      icon: <Car className="w-5 h-5" />,
      color: "text-blue-500"
    },
    {
      id: 3,
      category: "Food & Dining",
      amount: 280,
      date: "16th Feb 2025",
      icon: <Utensils className="w-5 h-5" />,
      color: "text-green-500"
    },
    {
      id: 4,
      category: "Electricity Bill",
      amount: 200,
      date: "11th Feb 2025",
      icon: <Home className="w-5 h-5" />,
      color: "text-yellow-500"
    },
    {
      id: 5,
      category: "Loan Repayment",
      amount: 600,
      date: "10th Feb 2025",
      icon: <Home className="w-5 h-5" />,
      color: "text-orange-500"
    },
    {
      id: 6,
      category: "Gas & Fuel",
      amount: 150,
      date: "9th Feb 2025",
      icon: <Car className="w-5 h-5" />,
      color: "text-red-500"
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
              <h1 className="text-3xl font-bold text-slate-800">Expense Overview</h1>
              <p className="text-slate-600">Track your spending habits over time and gain insights into where your money goes.</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Link to="/add-transaction">
                <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Expense
                </Button>
              </Link>
            </div>
          </div>

          {/* Expense Chart */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Expense Overview</CardTitle>
              <p className="text-slate-600">Track your spending habits over time and gain insights into where your money goes.</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={expenseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Amount']}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="url(#expenseGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#f97316' }}
                    />
                    <defs>
                      <linearGradient id="expenseGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* All Expenses */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">All Expenses</CardTitle>
                <p className="text-slate-600">Detailed breakdown of your spending</p>
              </div>
              <Button variant="outline" size="sm" className="text-purple-600 hover:text-purple-700">
                Download Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-slate-100 ${expense.color}`}>
                        {expense.icon}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{expense.category}</p>
                        <p className="text-sm text-slate-600">{expense.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">
                        -${expense.amount.toLocaleString()}
                      </p>
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

export default Expenses;
