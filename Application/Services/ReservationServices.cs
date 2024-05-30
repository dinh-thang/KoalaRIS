using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities;
using Application.Entities.Auth;

namespace Application.Services
{
    public class ReservationServices : IReservationServices
    {
        private readonly IReservationRepository _reservationRepository;
        private readonly IAccountRepository _accountRepository;

        public ReservationServices(IReservationRepository reservationRepository, IAccountRepository accountRepository)
        {
            _reservationRepository = reservationRepository;
            _accountRepository = accountRepository;
        }

        // create new Reservation entity => add it to the database using repo
        public void MakeReservation(Guid accountID, DateTime reserveTime, int quantity)
        {
            Account? userAccount = _accountRepository.GetById(accountID);

            if (userAccount == null)
            {
                return;
            }
            Reservation reservation = new Reservation(userAccount, reserveTime, quantity);
            
            // Add to database using repo
            _reservationRepository.Add(reservation);
        }

        // update reservation using Update in repo
        // need help here
        public void UpdateReservation(Guid id, DateTime newTime, int newQuantity)
        {
            Reservation? newBooking = _reservationRepository.GetById(id);

            if (newBooking == null)
            {
                return;
            }
            newBooking.ReserveTime = newTime;
            newBooking.ReserveQuantity = newQuantity;

            _reservationRepository.Update(newBooking);
        }

        // delete the reservation from the database using repo
        public void CancelReservation(Guid id)
        {
            _reservationRepository.Delete(id);
        }
    }
}
