namespace Application.Entities.Booking
{
    public class Reservation
    {
        // knows about Account
        // knows about booking info
        public Guid Id { get; set; }


        public Reservation()
        {
            Id = Guid.NewGuid();
        }
        

    }
}
