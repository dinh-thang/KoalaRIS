using Application.Abstractions.Repos;
using Application.Entities;
using DataAccess.Data;

namespace DataAccess.Repositories
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly AppDbContext _db;

        public ReservationRepository(AppDbContext db) 
        {
            _db = db;
        }

        public void Add(Reservation reservation)
        {
            _db.Reservations.Add(reservation);
            _db.SaveChanges();
        }

        public void Delete(Guid id)
        {
            if (GetById(id) != null)
            {
                _db.Reservations.Remove(GetById(id)!);
                _db.SaveChanges();
            }
        }

        public List<Reservation> GetAll()
        {
            return _db.Reservations.ToList();
        }

        public Reservation? GetById(Guid id)
        {
            return _db.Reservations.Single(r => r.Id == id);
        }

        public void Update(Reservation updateReservation)
        {
            _db.Update(updateReservation);
            _db.SaveChanges();
        }
    }
}
