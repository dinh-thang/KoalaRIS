using Application.Entities.Auth;
using Application.Entities.Ordering;
using Application.ValueObjects;

namespace Application.Abstractions.Services
{
    public interface IOrderServices
    {
        // return a list of all Orders from the database for an Account
        public List<Order> GetAllOrders(Guid accountId);
        
        // create a new order, add it to the database. Return the Order Guid for confirmation.
        public Guid CreateOrder(Cart cart, Guid accountId);

        // get the PaymentDetail from an order id
        public PaymentDetail GetReceipt(Guid orderId);
    }
}
