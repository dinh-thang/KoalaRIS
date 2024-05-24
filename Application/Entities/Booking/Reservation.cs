using Application.Entities.Auth;

namespace Application.Entities.Booking
{
    public class Reservation
    {
        public Guid Id { get; set; }
        public Account Account { get; set; } = null!;
        public DateTime ReserveTime { get; set; }
        public int ReserveQuantity { get; set; }

        public Reservation()
        {
            Id = Guid.NewGuid();
        }
        

    }
}
