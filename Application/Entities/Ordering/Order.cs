using Application.Entities.Auth;
using Application.ValueObjects;

namespace Application.Entities.Ordering
{
    public class Order
    {
        public Guid Id { get; set; }
        public Cart Cart { get; set; } = null!;
        public Account Account { get; set; } = null!;
        public PaymentDetail PaymentDetail { get; set; } = null!;
        public DeliveryDetail? DeliveryDetail { get; set; }
        public bool IsCompleted { get; private set; }

        public Order() { }
        public Order(Account account, Cart cart)
        {
            Id = Guid.NewGuid();
            Cart = cart;
            Account = account;
            DeliveryDetail = null;
            IsCompleted = false;
        }

        public void SetPaymentDetail(int cardNumber, DateTime expiryDate, int cvc)
        {
            PaymentDetail = new PaymentDetail(cardNumber, expiryDate, cvc);
        }

        public void SetDeliveryDetail(string address, string description)
        {
            DeliveryDetail = new DeliveryDetail(address, description);
        }

        public void CompleteOrder()
        {
            IsCompleted = true;
        }
    }
}
