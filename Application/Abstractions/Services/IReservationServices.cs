using Application.Entities;
using System.Security.Cryptography;

namespace Application.Abstractions.Services
{
    public interface IReservationServices
    {
        public List<Reservation> GetAllReservationsOfACustomer(Guid customerId);
        public List<Reservation> AdminGetAllReservations(Guid accountId);

        public Guid MakeReservation(Guid accountId, DateTime reservationTime, int bookingQuantity);
        public Guid UpdateReservation(Guid accountId, DateTime reservationTime, int bookingQuantity);
        public Guid CancelReservation(Guid bookingId);
    }
}
