
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar";
import { Plus, TrendingDown, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Rent', amount: 1200, date: '2024-01-01', description: 'Monthly rent' },
    { id: 2, category: 'Food', amount: 300, date: '2024-01-15', description: 'Groceries' },
    { id: 3, category: 'Transport', amount: 150, date: '2024-01-20', description: 'Gas and maintenance' },
    { id: 4, category: 'Entertainment', amount: 100, date: '2024-01-25', description: 'Movies and dining' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: '',
    description: ''
  });

  const categories = ['Rent', 'Food', 'Transport', 'Entertainment', 'Healthcare', 'Shopping', 'Utilities', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category || !formData.amount || !formData.date) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newExpense = {
      id: expenses.length + 1,
      category: formData.category,
      amount: parseFloat(formData.amount),
      date: formData.date,
      description: formData.description
    };

    setExpenses([...expenses, newExpense]);
    setFormData({ category: '', amount: '', date: '', description: '' });
    setShowAddForm(false);
    toast.success("Expense added successfully!");
  };

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    toast.success("Expense deleted successfully!");
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const expensesByCategory = categories.map(category => {
    const categoryExpenses = expenses.filter(expense => expense.category === category);
    const total = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    return { category, total, count: categoryExpenses.length };
  }).filter(item => item.total > 0);

  return (
    <div className="min-h-screen flex w-full bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Expense Tracking</h1>
              <p className="text-slate-600">Monitor and categorize your spending</p>
            </div>
            <Button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingDown className="w-5 h-5 mr-2 text-red-500" />
                  Total Monthly Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
                <p className="text-slate-600 mt-2">From {expenses.length} transactions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Category</CardTitle>
              </CardHeader>
              <CardContent>
                {expensesByCategory.length > 0 && (
                  <>
                    <div className="text-2xl font-bold text-slate-800">
                      {expensesByCategory.sort((a, b) => b.total - a.total)[0].category}
                    </div>
                    <p className="text-slate-600 mt-2">
                      ${expensesByCategory.sort((a, b) => b.total - a.total)[0].total} spent
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Add Expense Form */}
          {showAddForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Add New Expense</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount ($)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description (Optional)</Label>
                      <Input
                        id="description"
                        type="text"
                        placeholder="Brief description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">Add Expense</Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Category Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Expenses by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {expensesByCategory.map((item) => (
                  <div key={item.category} className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-medium text-slate-800">{item.category}</h3>
                    <p className="text-2xl font-bold text-red-600">${item.total}</p>
                    <p className="text-sm text-slate-600">{item.count} transactions</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expense List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">{expense.category}</p>
                        <p className="text-sm text-slate-600">
                          {expense.date} • {expense.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-red-600">${expense.amount}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(expense.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
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
