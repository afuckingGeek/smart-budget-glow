
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { Calendar, TrendingUp, TrendingDown, Filter } from "lucide-react";

const History = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-01');
  const [filterType, setFilterType] = useState('all');

  const monthlyData = [
    {
      month: '2024-01',
      monthName: 'January 2024',
      totalIncome: 3500,
      totalExpenses: 1650,
      balance: 1850,
      transactions: [
        { id: 1, type: 'income', amount: 3000, category: 'Salary', date: '2024-01-01', description: 'Monthly salary' },
        { id: 2, type: 'income', amount: 500, category: 'Freelance', date: '2024-01-15', description: 'Web design project' },
        { id: 3, type: 'expense', amount: 1200, category: 'Rent', date: '2024-01-02', description: 'Monthly rent' },
        { id: 4, type: 'expense', amount: 300, category: 'Food', date: '2024-01-03', description: 'Groceries' },
        { id: 5, type: 'expense', amount: 150, category: 'Transport', date: '2024-01-04', description: 'Gas and maintenance' },
      ]
    },
    {
      month: '2023-12',
      monthName: 'December 2023',
      totalIncome: 2800,
      totalExpenses: 1500,
      balance: 1300,
      transactions: [
        { id: 6, type: 'income', amount: 2800, category: 'Salary', date: '2023-12-01', description: 'Monthly salary' },
        { id: 7, type: 'expense', amount: 1200, category: 'Rent', date: '2023-12-02', description: 'Monthly rent' },
        { id: 8, type: 'expense', amount: 200, category: 'Food', date: '2023-12-15', description: 'Groceries' },
        { id: 9, type: 'expense', amount: 100, category: 'Entertainment', date: '2023-12-20', description: 'Movies' },
      ]
    }
  ];

  const currentMonthData = monthlyData.find(data => data.month === selectedMonth) || monthlyData[0];

  const filteredTransactions = currentMonthData.transactions.filter(transaction => {
    if (filterType === 'all') return true;
    return transaction.type === filterType;
  });

  return (
    <div className="min-h-screen flex w-full bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Transaction History</h1>
              <p className="text-slate-600">Review your financial activity over time</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                {monthlyData.map(data => (
                  <option key={data.month} value={data.month}>{data.monthName}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  ${currentMonthData.totalIncome.toLocaleString()}
                </div>
                <p className="text-xs text-slate-600">{currentMonthData.monthName}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  ${currentMonthData.totalExpenses.toLocaleString()}
                </div>
                <p className="text-xs text-slate-600">{currentMonthData.monthName}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Balance</CardTitle>
                <Calendar className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${
                  currentMonthData.balance >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${currentMonthData.balance.toLocaleString()}
                </div>
                <p className="text-xs text-slate-600">{currentMonthData.monthName}</p>
              </CardContent>
            </Card>
          </div>

          {/* Month Comparison */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Monthly Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data) => (
                  <div 
                    key={data.month}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedMonth === data.month 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                    onClick={() => setSelectedMonth(data.month)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-800">{data.monthName}</h3>
                        <p className="text-sm text-slate-600">
                          {data.transactions.length} transactions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Net Balance</p>
                        <p className={`text-lg font-bold ${
                          data.balance >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ${data.balance.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Transaction Filter and List */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Transactions - {currentMonthData.monthName}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-slate-500" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">All Transactions</option>
                    <option value="income">Income Only</option>
                    <option value="expense">Expenses Only</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'income' ? 
                          <TrendingUp className="w-5 h-5 text-green-600" /> : 
                          <TrendingDown className="w-5 h-5 text-red-600" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{transaction.category}</p>
                        <p className="text-sm text-slate-600">
                          {transaction.date} • {transaction.description}
                        </p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                    </div>
                  </div>
                ))}
                
                {filteredTransactions.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    No transactions found for the selected filter.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;
