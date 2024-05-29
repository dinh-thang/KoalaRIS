using Application.Entities;

namespace Application.Abstractions.Repos
{
    public interface IReservationRepository
    {
        public Reservation? GetById(Guid id);
        public List<Reservation> GetAll();
        public void Add(Reservation reservation);
        public void Delete(Guid id);
        public void Update(Reservation reservation);
    }
}
