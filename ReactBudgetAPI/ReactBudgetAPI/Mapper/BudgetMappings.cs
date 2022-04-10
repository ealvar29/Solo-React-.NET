using AutoMapper;
using ReactBudgetAPI.Models;
using ReactBudgetAPI.Models.Dtos;

namespace ReactBudgetAPI.Mapper
{
    public class BudgetMappings : Profile
    {
        public BudgetMappings()
        {
            CreateMap<Expense, ExpenseDto>().ReverseMap();
        }
    }
}
