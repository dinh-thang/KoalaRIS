using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Auth;
using Application.Entities.Ordering;
using Application.ValueObjects;

namespace Application.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepository _repo;

        public OrderServices(IOrderRepository orderRepository)
        {
            _repo = orderRepository;
        }

        public Guid CreateOrder(Guid cartId, string email)
        {
            // implement 2 repo here
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

            return _repo.GetAll();
        }

        public Order? GetOrderById(Guid id)
        {
            return _repo.GetById(id);
        }

        public PaymentDetail GetReceipt(Guid orderId)
        {
            throw new NotImplementedException();
        }
    }
}
