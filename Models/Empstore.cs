using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace empstore.Models
{
    public class Empstore
    {

        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(50)]
        public string Department { get; set; }
        [Required]
        [StringLength(50)]
        public int Salary { get; set; }
    }
}

