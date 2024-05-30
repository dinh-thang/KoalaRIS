using Application.Entities.Ordering;
using System.ComponentModel.DataAnnotations.Schema;

namespace Application.ValueObjects
{
    [NotMapped]
    public record class PaymentDetail
    {
        public string CustomerName { get; set; } = "";
        public DateTime TransactionTime { get; set; }
        public float Total { get; set; }
        public List<Item> Items { get; set; }

        public PaymentDetail(string customerName, List<Item> items, float total)
        {
            CustomerName = customerName;
            TransactionTime = DateTime.Now;
            Items = items;
            Total = total;
        }
    }
}
