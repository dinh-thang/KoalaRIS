using System.Security.Cryptography;

namespace Application.Abstractions.Services
{
    public interface IReservationServices
    {
        public void MakeBooking(Guid accountId, DateTime reservationTime, int bookingQuantity);
        public void UpdateBooking(Guid reservationId, DateTime? reservationTime, int? bookingQuantity);
        public void CancelBooking(Guid bookingId);
    }
}
