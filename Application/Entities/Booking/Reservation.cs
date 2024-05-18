namespace Application.Entities.Booking
{
    public class Reservation
    {
        public Guid Id { get; set; }


        public Reservation()
        {
            Id = Guid.NewGuid();
        }
    }
}
