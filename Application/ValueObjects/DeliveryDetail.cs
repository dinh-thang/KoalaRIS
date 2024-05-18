namespace Application.ValueObjects
{
    public record class DeliveryDetail
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public int State {  get; set; }
        public string Country { get; set; }
    }
}
