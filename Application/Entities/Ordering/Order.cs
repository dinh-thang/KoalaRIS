using Application.Entities.Auth;
using Application.ValueObjects;

namespace Application.Entities.Ordering
{
    public class Order
    {
        public Guid Id { get; set; }
        public DeliveryDetail? DeliveryDetail { get; set; }
        
        public Cart Cart { get; set; } = null!;
        public Account Account { get; set; } = null!;
        public Payment Payment { get; set; } = null!;

        public Order()
        {
            Id = Guid.NewGuid();
            Cart = new Cart();
            Payment = new Payment();
        }

        public void Checkout()
        {
            throw new NotImplementedException();
        }

        public void GetReceipt()
        {
            throw new NotImplementedException();
        }
    }
}
