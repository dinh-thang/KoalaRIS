using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Ordering;
using Application.ValueObjects;

namespace Application.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IAccountRepository _accountRepository;

        public OrderServices(IOrderRepository orderRepository, IAccountRepository accountRepository)
        {
            _orderRepository = orderRepository;
            _accountRepository = accountRepository;
        }

        public Guid CreateOrder(Cart cart, Guid accountId)
        {
            var account = _accountRepository.GetById(accountId);

            var order = new Order(account, cart);

            _orderRepository.Add(order);
            return order.Id;
        }

        public List<Order> GetAllOrders(Guid accountId)
        {
            var account = _accountRepository.GetById(accountId);
            return _orderRepository.GetAll();
        }

        public Order? GetOrderById(Guid id)
        {
            return _orderRepository.GetById(id);
        }

        public PaymentDetail GetReceipt(Guid orderId)
        {
            var order = _orderRepository.GetById(orderId);

            return order.GenerateReceipt();
        }
    }
}


