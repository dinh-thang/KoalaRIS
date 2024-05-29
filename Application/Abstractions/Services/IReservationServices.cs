namespace Application.Abstractions.Services
{
    public interface IReservationServices
    {
        public void MakeReservation(Guid accountID, DateTime reserveTime, int quantity);
        public void UpdateReservation(Guid id, DateTime dateAndTime, int bookingQuantity);
        
    }
}
