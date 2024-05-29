using Application.Entities.Ordering;

namespace Application.ValueObjects
{
    public record class PaymentDetail
    {
        public string CustomerName { get; set; } = "";
        public DateTime TransactionTime { get; set; }
        public float Total { get; set; }
        public List<Item> Items { get; set; }

        public PaymentDetail(string name, List<Item> items, float total)
        {
            CustomerName = name;
            Items = new List<Item>();
            TransactionTime = DateTime.Now;
            Items = items;
            Total = total;
        }
    }
}
