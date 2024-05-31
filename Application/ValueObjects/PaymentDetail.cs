using System.ComponentModel.DataAnnotations.Schema;

namespace Application.ValueObjects
{
    public class PaymentDetail
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public DateTime TransactionTime { get; private set; } 
        public int CardNumber { get; private set; }
        public DateTime ExpiryDate { get; private set; }
        public int CVC { get; private set; }
         
        public PaymentDetail() { }
        public PaymentDetail(int cardNumber, DateTime expiryDate, int cvc)
        {
            TransactionTime = DateTime.Now;
            SetCardNumber(cardNumber);
            SetExpiryDate(expiryDate);
            SetCvc(cvc);
        }

        private void SetCardNumber(int cardNumber)
        {
            if (cardNumber.ToString().Length != 16)
            {
                throw new ArgumentException("Card number length needs to be 16.");
            }
            CardNumber = cardNumber;
        }

        private void SetExpiryDate(DateTime date)
        {
            if (date <= DateTime.Now)
            {
                throw new ArgumentException("Expiry date must not be in the past.");
            }
            ExpiryDate = date;
        }

        private void SetCvc(int cvc)
        {
            if (cvc.ToString().Length != 3)
            {
                throw new ArgumentException("Cvc length must be 3");
            }
            CVC = cvc;
        }
    }
}
