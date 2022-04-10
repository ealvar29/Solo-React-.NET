using Microsoft.EntityFrameworkCore;
using ReactBudgetAPI.Models;

namespace ReactBudgetAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Expense> Expenses { get; set; }
    }
}
