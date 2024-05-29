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

        public bool Add(Reservation reservation)
        {
            throw new NotImplementedException();
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Reservation> GetAll()
        {
            throw new NotImplementedException();
        }

        public Reservation GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Update(Reservation reservation)
        {
            throw new NotImplementedException();
        }
    }
}
