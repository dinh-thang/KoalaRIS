using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Ordering;

namespace Application.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepository _repo;

        public OrderServices(IOrderRepository orderRepository)
        {
            _repo = orderRepository;
        }

        public Guid AddNewOrder()
        {
            throw new NotImplementedException();
        }

        public List<Order> GetAllOrders(Guid accountId)
        {
            throw new NotImplementedException();
        }
    }
}
