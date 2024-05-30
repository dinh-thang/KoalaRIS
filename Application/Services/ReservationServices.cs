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

        public Guid MakeReservation(Guid accountID, DateTime reserveTime, int quantity)
        {
            Account? userAccount = _accountRepository.GetById(accountID);

            if (userAccount == null)
            {
                throw new ArgumentException("Invalid user account id.");
            }
            Reservation reservation = new Reservation(userAccount, reserveTime, quantity);
            
            _reservationRepository.Add(reservation);
            return reservation.Id;
        }

        public Guid UpdateReservation(Guid bookingId, DateTime newTime, int newQuantity)
        {
            Reservation? newBooking = _reservationRepository.GetById(bookingId);

            if (newBooking == null)
            {
                throw new ArgumentException("Invalid booking id.");
            }
            newBooking.ReserveTime = newTime;
            newBooking.ReserveQuantity = newQuantity;

            _reservationRepository.Update(newBooking);
            return bookingId;
        }

        public Guid CancelReservation(Guid bookingId)
        {
            _reservationRepository.Delete(bookingId);
            return bookingId;
        }

        public List<Reservation> GetAllReservationsOfACustomer(Guid customerId)
        {
            return _reservationRepository.GetAllByAccountId(customerId);
        }

        public List<Reservation> AdminGetAllReservations(Guid accountId)
        {
            Account? admin = _accountRepository.GetById(accountId);
            if (admin == null)
            {
                throw new ArgumentException("Invalid account id");
            }

            if (admin.AccountType != AccountType.Staff)
            {
                throw new InvalidOperationException("Only staff is allowed to view all bookings");
            }
            return _reservationRepository.GetAll();
        }
    }
}
