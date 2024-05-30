using System.Security.Cryptography;

namespace Application.Abstractions.Services
{
    public interface IReservationServices
    {
        public void MakeReservation(Guid accountId, DateTime reservationTime, int bookingQuantity);
        public void UpdateReservation(Guid reservationId, DateTime reservationTime, int bookingQuantity);
        public void CancelReservation(Guid bookingId);
    }
}
