using System.ComponentModel.DataAnnotations.Schema;

namespace Application.ValueObjects
{
    public class DeliveryDetail
    {
        public Guid OrderId { get; set; }
        public string Address { get; set; } = "";
        public string Description { get; set; } = "";

        public DeliveryDetail() { }
        public DeliveryDetail(string address, string description)
        {
            Address = address;
            Description = description;
        }
    }
}
