using Application.Entities;
using DataAccess.Data;

namespace DataAccess.Repositories
{
    public class ReservationRepository 
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
            Reservation reservation = _db.Reservations.Single(r => r.Id == id);

            _db.Reservations.Remove(reservation);
            _db.SaveChanges();
            throw new NotImplementedException();
        }

        public List<Reservation> GetAll()
        {
            return _db.Reservations.ToList();
        }

        public Reservation GetById(Guid id)
        {
            return _db.Reservations.Single(r => r.Id == id);
        }

        // need help here
        public void Update(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
