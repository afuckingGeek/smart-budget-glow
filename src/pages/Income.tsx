
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar";
import { Plus, TrendingUp, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Income = () => {
  const [incomes, setIncomes] = useState([
    { id: 1, source: 'Salary', amount: 3000, date: '2024-01-01', recurring: true },
    { id: 2, source: 'Freelance', amount: 500, date: '2024-01-15', recurring: false },
    { id: 3, source: 'Investment', amount: 200, date: '2024-01-20', recurring: false },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: '',
    recurring: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.source || !formData.amount || !formData.date) {
      toast.error("Please fill in all fields");
      return;
    }

    const newIncome = {
      id: incomes.length + 1,
      source: formData.source,
      amount: parseFloat(formData.amount),
      date: formData.date,
      recurring: formData.recurring
    };

    setIncomes([...incomes, newIncome]);
    setFormData({ source: '', amount: '', date: '', recurring: false });
    setShowAddForm(false);
    toast.success("Income added successfully!");
  };

  const handleDelete = (id: number) => {
    setIncomes(incomes.filter(income => income.id !== id));
    toast.success("Income deleted successfully!");
  };

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);

  return (
    <div className="min-h-screen flex w-full bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Income Tracking</h1>
              <p className="text-slate-600">Manage and track all your income sources</p>
            </div>
            <Button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Income
            </Button>
          </div>

          {/* Summary Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Total Monthly Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">${totalIncome.toLocaleString()}</div>
              <p className="text-slate-600 mt-2">From {incomes.length} income sources</p>
            </CardContent>
          </Card>

          {/* Add Income Form */}
          {showAddForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Add New Income</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="source">Income Source</Label>
                      <Input
                        id="source"
                        type="text"
                        placeholder="e.g., Salary, Freelance"
                        value={formData.source}
                        onChange={(e) => setFormData({...formData, source: e.target.value})}
                      />
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
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="recurring"
                        checked={formData.recurring}
                        onChange={(e) => setFormData({...formData, recurring: e.target.checked})}
                        className="rounded"
                      />
                      <Label htmlFor="recurring">Recurring Income</Label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">Add Income</Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Income List */}
          <Card>
            <CardHeader>
              <CardTitle>Income Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incomes.map((income) => (
                  <div key={income.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{income.source}</p>
                        <p className="text-sm text-slate-600">
                          {income.date} {income.recurring && '• Recurring'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-green-600">${income.amount}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(income.id)}>
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

export default Income;
