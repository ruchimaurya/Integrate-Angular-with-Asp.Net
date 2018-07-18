using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace empstore.Controllers.Resources
{
    public class EmpstoreResource
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string City { get; set; }

        public string Department { get; set; }

        public int Salary { get; set; }
    }
}
