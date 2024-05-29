using Application.Abstractions.Repos;
using Application.Entities.Ordering;
using DataAccess.Data;

namespace DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _db;
        public OrderRepository(AppDbContext db) 
        {
            _db = db;
        }

        public void Add(Order newOrder)
        {
            _db.Orders.Add(newOrder);
            _db.SaveChanges();
        }

        public void Delete(Guid id)
        {
            Order? order = GetById(id);

            if (order != null)
            {
                _db.Orders.Remove(order);
            }
        }

        public List<Order> GetAll()
        {
            return _db.Orders.ToList();
        }

        public Order? GetById(Guid id)
        {
            return _db.Orders.Find(id);
        }
    }
}
