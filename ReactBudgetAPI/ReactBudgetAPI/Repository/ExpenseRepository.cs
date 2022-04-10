using ReactBudgetAPI.Data;
using ReactBudgetAPI.Models;
using ReactBudgetAPI.Repository.IRepository;
using System.Collections.Generic;
using System.Linq;

namespace ReactBudgetAPI.Repository
{
    public class ExpenseRepository : IExpenseRepository
    {
        private readonly ApplicationDbContext _db;

        public ExpenseRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        public bool CreateExpense(Expense expense)
        {
            _db.Expenses.Add(expense);
            return Save();
        }

        public bool DeleteExpense(int id)
        {
            throw new System.NotImplementedException();
        }

        public Expense GetExpense(int id)
        {
            throw new System.NotImplementedException();
        }

        public ICollection<Expense> GetExpenses()
        {
            return _db.Expenses.OrderBy(x => x.Id).ToList();
        }

        public bool Save()
        {
            throw new System.NotImplementedException();
        }

        public bool UpdateExpense(Expense expense)
        {
            throw new System.NotImplementedException();
        }
    }
}
