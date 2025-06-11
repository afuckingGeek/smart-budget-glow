
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PlusCircle, 
  ShoppingBag, 
  Car, 
  Home, 
  Utensils,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Sidebar from "@/components/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "$91,100",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Total Income",
      value: "$98,200",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Total Expenses",
      value: "$7,100",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const pieData = [
    { name: 'Income', value: 98200, color: '#f97316' },
    { name: 'Expenses', value: 7100, color: '#ef4444' },
    { name: 'Balance', value: 91100, color: '#8b5cf6' }
  ];

  const transactions = [
    {
      id: 1,
      category: "Shopping",
      amount: -430,
      date: "17th Feb 2025",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "text-pink-500"
    },
    {
      id: 2,
      category: "Travel",
      amount: -670,
      date: "13th Feb 2025",
      icon: <Car className="w-5 h-5" />,
      color: "text-blue-500"
    },
    {
      id: 3,
      category: "Salary",
      amount: 12000,
      date: "12th Feb 2025",
      icon: <DollarSign className="w-5 h-5" />,
      color: "text-green-500"
    },
    {
      id: 4,
      category: "Electricity Bill",
      amount: -200,
      date: "11th Feb 2025",
      icon: <Home className="w-5 h-5" />,
      color: "text-yellow-500"
    },
    {
      id: 5,
      category: "Loan Repayment",
      amount: -600,
      date: "10th Feb 2025",
      icon: <Home className="w-5 h-5" />,
      color: "text-orange-500"
    }
  ];

  const monthlyData = [
    { month: 'Jan', income: 11200, expenses: 3200 },
    { month: 'Feb', income: 9800, expenses: 2800 },
    { month: 'Mar', income: 10500, expenses: 3500 },
    { month: 'Apr', income: 12000, expenses: 4000 },
    { month: 'May', income: 9500, expenses: 2900 },
    { month: 'Jun', income: 11800, expenses: 3800 }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
              <p className="text-slate-600">Welcome back! Here's your financial overview.</p>
            </div>
            <Link to="/add-transaction">
              <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600">
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Transaction
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Transactions */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                  See All
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-slate-100 ${transaction.color}`}>
                        {transaction.icon}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{transaction.category}</p>
                        <p className="text-sm text-slate-600">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                      </p>
                      {transaction.amount > 0 ? (
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Financial Overview Chart */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Total Balance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Total Expenses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Total Income</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Trends */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Monthly Trends</CardTitle>
              <p className="text-slate-600">Track your income and expenses over time</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Bar dataKey="income" fill="#f97316" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
