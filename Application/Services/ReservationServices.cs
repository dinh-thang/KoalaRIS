using Application.Abstractions.Repos;
using Application.Entities.Booking;

namespace Application.Services
{
    public class ReservationServices
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
