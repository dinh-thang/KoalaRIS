using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Auth;
using Application.Entities.Ordering;

namespace Application.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepository _orderRepository;

        public OrderServices(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public void CreateNewOrder(Account account)
        {
            throw new NotImplementedException();
        }

        public List<Order> GetAllOrders(Account account)
        {
            return _orderRepository.GetAll();
        }
    }
}
