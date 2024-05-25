using Application.Entities.Auth;
using Application.Entities.Ordering;

namespace Application.Abstractions.Services
{
    public interface IOrderServices
    {
        // return a list of all Orders from the database for an Account
        public List<Order> GetAllOrders(Account account);

        // create a new order, add it to the database and return the Order for confirmation
        public Order CreateOrder();
    }
}
