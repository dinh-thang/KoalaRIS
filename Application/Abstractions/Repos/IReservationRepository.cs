using Application.Entities.Booking;

namespace Application.Abstractions.Repos
{
    public interface IReservationRepository
    {
        public Reservation GetById(Guid id);
        public List<Reservation> GetAllReservation();
        public void AddReservation(Reservation reservation);
        public void RemoveReservation(Guid id);
        public void UpdateReservation(Reservation reservation);
    }
}
