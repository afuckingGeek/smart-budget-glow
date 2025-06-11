
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, TrendingUp, TrendingDown, Filter, Download } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const History = () => {
  const monthlyHistory = [
    {
      month: "February 2025",
      totalIncome: 98200,
      totalExpenses: 7100,
      balance: 91100,
      transactions: 15,
      savings: 85100
    },
    {
      month: "January 2025",
      totalIncome: 85600,
      totalExpenses: 12400,
      balance: 73200,
      transactions: 22,
      savings: 60800
    },
    {
      month: "December 2024",
      totalIncome: 79300,
      totalExpenses: 15800,
      balance: 63500,
      transactions: 28,
      savings: 47700
    },
    {
      month: "November 2024",
      totalIncome: 82100,
      totalExpenses: 13200,
      balance: 68900,
      transactions: 19,
      savings: 55700
    },
    {
      month: "October 2024",
      totalIncome: 76800,
      totalExpenses: 14600,
      balance: 62200,
      transactions: 25,
      savings: 47600
    },
    {
      month: "September 2024",
      totalIncome: 88400,
      totalExpenses: 11300,
      balance: 77100,
      transactions: 17,
      savings: 65800
    }
  ];

  const getPerformanceBadge = (balance: number, expenses: number) => {
    const ratio = balance / expenses;
    if (ratio > 10) return { text: "Excellent", variant: "default" as const, color: "bg-green-500" };
    if (ratio > 5) return { text: "Good", variant: "secondary" as const, color: "bg-blue-500" };
    if (ratio > 3) return { text: "Fair", variant: "outline" as const, color: "bg-yellow-500" };
    return { text: "Needs Attention", variant: "destructive" as const, color: "bg-red-500" };
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Monthly History</h1>
              <p className="text-slate-600">Review your financial performance over time</p>
            </div>
            <div className="flex space-x-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  <SelectItem value="2025">2025 Only</SelectItem>
                  <SelectItem value="2024">2024 Only</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-slate-800 mb-2">6</div>
                <div className="text-sm text-slate-600">Months Tracked</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">$510,400</div>
                <div className="text-sm text-slate-600">Total Income</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">$74,400</div>
                <div className="text-sm text-slate-600">Total Expenses</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">$436,000</div>
                <div className="text-sm text-slate-600">Total Saved</div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Breakdown */}
          <div className="space-y-6">
            {monthlyHistory.map((month, index) => {
              const performance = getPerformanceBadge(month.balance, month.totalExpenses);
              
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg">
                          <CalendarDays className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{month.month}</CardTitle>
                          <p className="text-sm text-slate-600">{month.transactions} transactions</p>
                        </div>
                      </div>
                      <Badge variant={performance.variant} className={performance.color}>
                        {performance.text}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Total Income</p>
                          <p className="text-lg font-semibold text-green-600">
                            ${month.totalIncome.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <TrendingDown className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Total Expenses</p>
                          <p className="text-lg font-semibold text-red-600">
                            ${month.totalExpenses.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Balance</p>
                          <p className="text-lg font-semibold text-purple-600">
                            ${month.balance.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Savings</p>
                          <p className="text-lg font-semibold text-blue-600">
                            ${month.savings.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
