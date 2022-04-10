using System;
using System.ComponentModel.DataAnnotations;

namespace ReactBudgetAPI.Models
{
    public class Expense
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public Double Cost { get; set; }

        public string ExpenseType { get; set; }

        public bool IsComplete { get; set; }

        public DateTime DueDate { get; set; }

    }
}
