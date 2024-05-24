using Application.Abstractions.Repos;
using Application.Entities.Auth;
using Application.Entities.Ordering;
using DataAccess.Data;

namespace DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly Database _db;
        public OrderRepository(Database db) 
        {
            _db = db;
        }
        public List<Order> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
