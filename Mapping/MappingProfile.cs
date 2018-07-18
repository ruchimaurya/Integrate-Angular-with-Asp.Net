using AutoMapper;
using empstore.Controllers.Resources;
using empstore.Models;


namespace empstore.Mapping
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Empstore, EmpstoreResource>();

            CreateMap<EmpstoreResource, Empstore>()
                .ForMember(v => v.Id, opt => opt.Ignore());
        }
    }
}
