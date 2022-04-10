using AutoMapper;
using ReactBudgetAPI.Models;
using ReactBudgetAPI.Models.Dtos;

namespace ReactBudgetAPI.Mapper
{
    public class ExpenseMappings : Profile
    {
        public ExpenseMappings()
        {
            CreateMap<Expense, ExpenseDto>().ReverseMap();
        }
    }
}
