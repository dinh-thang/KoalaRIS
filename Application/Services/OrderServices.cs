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

        public Guid CreateOrder(Guid cartId, string email)
        {
            throw new NotImplementedException();
        }

        public List<Order> GetAllOrders(Account account)
        {
            if (account == null)
            {
                throw new ArgumentNullException(nameof(account));
            }

            if (account.AccountType != AccountType.Staff)
            {
                throw new UnauthorizedAccessException("Only admin accounts can retrieve order information.");
            }

            return _orderRepository.GetAll();
        }

        public Order? GetOrderById(Guid id)
        {
            return _orderRepository.GetById(id);
        }

        public PaymentDetail GetReceipt(Guid orderId)
        {
            throw new NotImplementedException();
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
