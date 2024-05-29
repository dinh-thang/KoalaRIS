namespace Application.Abstractions.Services
{
    public interface IReservationServices
    {
        public void MakeBooking(string email, DateTime dateAndTime, int bookingQuantity);
        public void UpdateBooking(string email, DateTime dateAndTime, int bookingQuantity);
        
    }
}
