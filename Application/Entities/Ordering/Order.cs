using Application.Entities.Auth;
using Application.ValueObjects;

namespace Application.Entities.Ordering
{
    public class Order
    {
        public Guid Id { get; set; }
        public Cart Cart { get; set; } = null!;
        public Account Account { get; set; } = null!;
        public bool IsCompleted { get; private set; }

        private Order()
        {
        }

        public Order(Account account)   
        {
            Id = Guid.NewGuid();
            Cart = new Cart();
            Account = account;
        }

        public void MarkCompleted()
        {
            // set the Order state to complete. This can't be set to false once the Order is completed.
        }

        public PaymentDetail GenerateReceipt()
        {
            // return PaymentDetail obj, containing all the neccessary receipt info.
            throw new NotImplementedException();
        }
    }
}
