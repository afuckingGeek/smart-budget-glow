
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddTransaction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const expenseCategories = ['Rent', 'Food', 'Transport', 'Entertainment', 'Healthcare', 'Shopping', 'Utilities', 'Other'];
  const incomeCategories = ['Salary', 'Freelance', 'Investment', 'Gift', 'Bonus', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real app, this would save to a database
    console.log('Transaction data:', formData);
    
    toast.success(`${formData.type === 'income' ? 'Income' : 'Expense'} added successfully!`);
    
    // Navigate back to dashboard
    navigate('/dashboard');
  };

  const handleQuickAmount = (amount: number) => {
    setFormData({...formData, amount: amount.toString()});
  };

  return (
    <div className="min-h-screen flex w-full bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link to="/dashboard">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Add Transaction</h1>
              <p className="text-slate-600">Record a new income or expense</p>
            </div>
          </div>

          {/* Transaction Type Toggle */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant={formData.type === 'income' ? 'default' : 'outline'}
                  onClick={() => setFormData({...formData, type: 'income', category: ''})}
                  className={formData.type === 'income' ? 
                    'bg-green-500 hover:bg-green-600 text-white' : 
                    'border-green-500 text-green-500 hover:bg-green-50'
                  }
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Income
                </Button>
                <Button
                  variant={formData.type === 'expense' ? 'default' : 'outline'}
                  onClick={() => setFormData({...formData, type: 'expense', category: ''})}
                  className={formData.type === 'expense' ? 
                    'bg-red-500 hover:bg-red-600 text-white' : 
                    'border-red-500 text-red-500 hover:bg-red-50'
                  }
                >
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Expense
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add {formData.type === 'income' ? 'Income' : 'Expense'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount */}
                <div>
                  <Label htmlFor="amount">Amount ($) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="text-2xl font-bold text-center"
                  />
                  
                  {/* Quick Amount Buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.type === 'expense' ? 
                      [10, 25, 50, 100, 200, 500].map(amount => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      )) :
                      [500, 1000, 2000, 3000, 5000].map(amount => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      ))
                    }
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  >
                    <option value="">Select a category</option>
                    {(formData.type === 'income' ? incomeCategories : expenseCategories).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Optional description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                {/* Date */}
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    type="submit" 
                    className={`flex-1 ${formData.type === 'income' ? 
                      'bg-green-500 hover:bg-green-600' : 
                      'bg-red-500 hover:bg-red-600'
                    } text-white`}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add {formData.type === 'income' ? 'Income' : 'Expense'}
                  </Button>
                  <Link to="/dashboard">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Recent Transactions Preview */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Salary</span>
                  </div>
                  <span className="text-green-600 font-semibold">+$3,000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Rent</span>
                  </div>
                  <span className="text-red-600 font-semibold">-$1,200</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Food</span>
                  </div>
                  <span className="text-red-600 font-semibold">-$300</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
