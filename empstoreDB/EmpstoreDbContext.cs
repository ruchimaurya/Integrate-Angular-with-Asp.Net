using empstore.Models;
using Microsoft.EntityFrameworkCore;

namespace empstore.empstoreDB
{
    public class EmpstoreDbContext :DbContext
    {
        public EmpstoreDbContext(DbContextOptions options) 
            : base(options){ }

        public DbSet<Empstore> Empstores { get; set; }
    }
}
