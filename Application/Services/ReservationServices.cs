using Application.Abstractions.Repos;
using Application.Entities.Booking;

namespace Application.Services
{
    public class ReservationServices
    {
        private readonly IReservationRepository _reservationRepository;
        private readonly IAccountRepository _accountRepository;

        public ReservationServices(IReservationRepository reservationRepository, IAccountRepository accountRepository)
        {
            _reservationRepository = reservationRepository;
            _accountRepository = accountRepository;
        }

        // create new Reservation entity => add it to the database using repo
        public void MakeReservataion(string email, DateTime reserveTime, int quantity)
        {
            throw new NotImplementedException();
        }

        // update reservation using Update in repo
        public void UpdateReservationInfo()
        {
            throw new NotImplementedException();

        }

        // delete the reservation from the database using repo
        public void CancelReservation()
        {
            throw new NotImplementedException();

        }
    }
}
