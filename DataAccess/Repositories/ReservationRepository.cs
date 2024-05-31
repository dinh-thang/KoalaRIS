using Application.Abstractions.Repos;
using Application.Entities;
using DataAccess.Data;
using Microsoft.EntityFrameworkCore;

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
            return _db.Reservations
                .Include(a => a.Account)
                .ToList();
        }

        public List<Reservation> GetAllByAccountId(Guid accountId)
        {
            return _db.Reservations
                .Include(a => a.Account)
                .Where(a => a.Account.Id == accountId).ToList();
        }

        public Reservation? GetById(Guid id)
        {
            return _db.Reservations
                .Include(a => a.Account).Single(r => r.Id == id);
        }

        public void Update(Reservation updateReservation)
        {
            _db.Update(updateReservation);
            _db.SaveChanges();
        }
    }
}
