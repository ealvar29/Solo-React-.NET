using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ReactBudgetAPI.Models.Dtos;
using ReactBudgetAPI.Repository.IRepository;
using System.Collections.Generic;

namespace ReactBudgetAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpenseController : Controller
    {
        private IExpenseRepository _eRepo;
        private readonly IMapper _mapper;

        public ExpenseController(IExpenseRepository eRepo, IMapper mapper)
        {
            _eRepo = eRepo;
            _mapper = mapper;
        }

        /// <summary>
        /// Get list of national parks.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<ExpenseDto>))]
        public IActionResult GetExpenses()
        {
            var expenses = _eRepo.GetExpenses();
            var expensesDto = new List<ExpenseDto>();
            foreach (var expense in expenses)
            {
                expensesDto.Add(_mapper.Map<ExpenseDto>(expense));
            }
            return Ok(expenses);
        }
    }
}
