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

        private float GetTotalPrice()
        {
            // Calculate the total price for all items in the cart
            return Cart.Items.Sum(item => item.Price);
        }

        public PaymentDetail GenerateReceipt()
        {
            // Create and return a PaymentDetail object containing all necessary receipt info
            throw new NotImplementedException();
        }   

    }
}
