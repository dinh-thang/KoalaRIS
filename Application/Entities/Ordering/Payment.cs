namespace Application.Entities.Ordering
{
    public class Payment
    {
        public Guid Id { get; set; }

        public Receipt CreateReceipt()
        {
            throw new NotImplementedException();
        }
    }
}
