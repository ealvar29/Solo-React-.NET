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

        public bool DeleteExpense(Expense expense)
        {
            _db.Expenses.Remove(expense);
            return Save();
        }

        public Expense GetExpense(int expenseId)
        {
            return _db.Expenses.FirstOrDefault(x => x.Id == expenseId);
        }

        public ICollection<Expense> GetExpenses()
        {
            return _db.Expenses.OrderBy(x => x.Id).ToList();
        }

        public bool UpdateExpense(Expense expense)
        {
            _db.Expenses.Update(expense);
            return Save();
        }

        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}
