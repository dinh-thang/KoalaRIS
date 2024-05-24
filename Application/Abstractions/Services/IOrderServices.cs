using Application.Entities.Auth;
using Application.Entities.Ordering;

namespace Application.Abstractions.Services
{
    public interface IOrderServices
    {
        public List<Order> GetAllOrders(Account account);
        public void CreateNewOrder(Account account);
        
    }
}
