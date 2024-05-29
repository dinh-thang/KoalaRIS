using Application.Abstractions.Repos;
using Application.Abstractions.Services;

namespace Application.Services
{
    public class ReservationServices : IReservationServices
    {
        // make a variable for total slots left
        private readonly IReservationRepository _repo;

        public ReservationServices(IReservationRepository repo)
        {
            _repo = repo;
        }

        public void MakeReservataion()
        {
            
        }
    }
}
