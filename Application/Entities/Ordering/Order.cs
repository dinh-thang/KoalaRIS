using Application.Entities.Auth;
using Application.ValueObjects;

namespace Application.Entities.Ordering
{
    public class Order
    {
        public Guid Id { get; set; }
        public Cart Cart { get; set; } = null!;
        public Account Account { get; set; } = null!;

        public Order(Account account, Cart cart)
        {
            Id = Guid.NewGuid();
            Cart = cart;
            Account = account;
        }

        public PaymentDetail GenerateReceipt()
        {
            return new PaymentDetail(Account.Name, Cart.Items, Cart.GetTotalPrice());
        }   

    }
}
