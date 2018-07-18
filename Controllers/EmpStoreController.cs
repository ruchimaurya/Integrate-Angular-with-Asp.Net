using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using empstore.empstoreDB;
using empstore.Controllers.Resources;
using empstore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace empstore.Controllers
{
    [Route("/api/empstores")]
    public class EmpstoresController : Controller
    {
        private readonly IMapper mapper;
        private readonly EmpstoreDbContext context;
        public EmpstoresController(IMapper mapper, EmpstoreDbContext context)
        {
            this.context = context;
            this.mapper = mapper;

        }


        [HttpGet]
        public async Task<IEnumerable<EmpstoreResource>> GetEmpStore(EmpstoreResource empstoreResource)
        {
            var empstore = await context.Empstores.ToListAsync();
            return mapper.Map<IEnumerable<Empstore>, IEnumerable<EmpstoreResource>>(empstore);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmpstore([FromBody] EmpstoreResource empstoreResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var empstore = mapper.Map<EmpstoreResource, Empstore>(empstoreResource);
            context.Empstores.Add(empstore);
            await context.SaveChangesAsync();
            return Ok(empstore);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmpstore(int id, [FromBody] EmpstoreResource empstoreResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var empstore = await context.Empstores.FindAsync(id);
            if (empstore == null)
                return NotFound();
            mapper.Map<EmpstoreResource, Empstore>(empstoreResource, empstore);
            await context.SaveChangesAsync();
            return Ok(empstore);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmpstore(int id)
        {
            var empstore = await context.Empstores.FindAsync(id);
            if (empstore == null)
                return NotFound();
            var empstoreResource = mapper.Map<Empstore, EmpstoreResource>(empstore);
            return Ok(empstoreResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpstore(int id)
        {
            var empstore = await context.Empstores.FindAsync(id);
            if (empstore == null)
                return NotFound();
            context.Remove(empstore);
            await context.SaveChangesAsync();
            return Ok(id);
        }
    }
}