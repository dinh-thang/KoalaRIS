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
            ReserveTime = CheckBookingTime(reserveTime);
            ReserveQuantity = CheckBookingQuantity(quantity);
        }
                
        public int CheckBookingQuantity(int quantiy)
        {
            if (quantiy < 1)
            {
                throw new ArgumentException();
            }
            return quantiy;
        }
        public DateTime CheckBookingTime(DateTime reserveTime)
        {
            if (reserveTime < DateTime.Now)
            {
                throw new ArgumentException();
            }
            return reserveTime;
        }
    }
}
