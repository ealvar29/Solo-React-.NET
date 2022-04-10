using ReactBudgetAPI.Models;
using System.Collections.Generic;

namespace ReactBudgetAPI.Repository.IRepository
{
    public interface IExpenseRepository
    {
        ICollection<Expense> GetExpenses();

        Expense GetExpense(int id);

        bool CreateExpense(Expense expense);

        bool UpdateExpense(Expense expense);

        bool DeleteExpense(int id);

        bool Save();
    }
}
