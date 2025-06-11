
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Sidebar from "@/components/Sidebar";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    amount: "",
    type: "",
    category: "",
    description: "",
    date: new Date().toISOString().split('T')[0]
  });

  const incomeCategories = [
    "Salary",
    "Freelance",
    "Business",
    "Investment",
    "Interest",
    "Rental",
    "Gift",
    "Other"
  ];

  const expenseCategories = [
    "Food & Dining",
    "Shopping",
    "Transportation",
    "Bills & Utilities",
    "Healthcare",
    "Entertainment",
    "Travel",
    "Education",
    "Insurance",
    "Home",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.type || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically save to a backend/database
    toast.success("Transaction added successfully!");
    
    // Reset form
    setFormData({
      amount: "",
      type: "",
      category: "",
      description: "",
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Add Transaction</h1>
              <p className="text-slate-600">Record a new income or expense</p>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PlusCircle className="w-5 h-5 text-purple-600" />
                <span>Transaction Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount *</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    className="text-lg"
                  />
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <Label htmlFor="type">Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transaction type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleInputChange("category", value)}
                    disabled={!formData.type}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {(formData.type === "income" ? incomeCategories : expenseCategories).map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Add a note about this transaction..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex space-x-4 pt-6">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Transaction
                  </Button>
                  <Link to="/dashboard" className="flex-1">
                    <Button type="button" variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Preview Card */}
          {formData.amount && formData.type && formData.category && (
            <Card className="border-0 shadow-lg mt-6 bg-gradient-to-r from-purple-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg">Transaction Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800 capitalize">
                      {formData.category.replace('-', ' ')}
                    </p>
                    <p className="text-sm text-slate-600">{formData.date}</p>
                    {formData.description && (
                      <p className="text-sm text-slate-600 mt-1">{formData.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-bold ${
                      formData.type === "income" ? "text-green-600" : "text-red-600"
                    }`}>
                      {formData.type === "income" ? "+" : "-"}${formData.amount}
                    </p>
                    <p className="text-sm text-slate-600 capitalize">{formData.type}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
