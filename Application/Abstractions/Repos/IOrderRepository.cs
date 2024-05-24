using Application.Entities.Ordering;

namespace Application.Abstractions.Repos
{
    public interface IOrderRepository
    {
        public List<Order> GetAll();

    }
}
