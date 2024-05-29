using Application.Entities.Auth;

namespace Application.Entities
{
    public class Reservation
    {
        public Guid Id { get; set; }
        public Account Account { get; set; } = null!;
        public DateTime ReserveTime { get; set; }
        public int ReserveQuantity { get; set; }

        public Reservation(Account account, DateTime reserveTime, int quantity)
        {
            Id = Guid.NewGuid();
            Account = account;
            ReserveTime = reserveTime;
            ReserveQuantity = CheckBookingQuantity(quantity);
        }
                
        public int CheckBookingQuantity(int quantiy)
        {
            // check booking quantity logic
            if (quantiy < 1)
            {
                throw new NotImplementedException();
            }
            return quantiy;
        }
        public DateTime CheckBookingTime(DateTime reserveTime)
        {
            //  Check valid booking time 
            if (reserveTime < DateTime.Now)
            {
                throw new NotImplementedException();
            }
            return reserveTime;
        }
    }
}
