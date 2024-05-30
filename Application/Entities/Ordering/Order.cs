using Application.Entities.Auth;
using Application.ValueObjects;

namespace Application.Entities.Ordering
{
    public class Order
    {
        public Guid Id { get; set; }
        public Cart Cart { get; set; }
        public Account Account { get; set; } = null!;

        public Order(Account account, Cart cart)
        {
            Id = Guid.NewGuid();
            Cart = cart;
            Account = account;
        }

        private float GetTotalPrice()
        {
            // return total price for all the Item in the Cart
            throw new NotImplementedException();
        }

        public PaymentDetail GenerateReceipt()
        {
            // return PaymentDetail obj, containing all the neccessary receipt info.
            throw new NotImplementedException();
        }
    }
}
