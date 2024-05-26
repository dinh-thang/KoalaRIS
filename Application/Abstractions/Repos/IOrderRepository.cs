using Application.Entities.Ordering;

namespace Application.Abstractions.Repos
{
    public interface IOrderRepository
    {
        public List<Order> GetAll();
        public Order? GetById(Guid id);
        public void Add(Order newOrder);
        public void Delete(Guid id);
    }
}
