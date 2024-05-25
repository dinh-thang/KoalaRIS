namespace Application.Entities.Ordering
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
        public float Price { get; private set; } 
        public int Stock { get; private set; }
        public bool IsDeliverable { get; set; } = false;

        // relational properties
        // int? means this property can be null. This creates a one-to-one link to a Cart.
        public Guid? CartID { get; set; }
        public Cart? Cart { get; set; }

        public Item(string name, float price, bool isDeliverable, int stock)
        {
            Id = Guid.NewGuid();
            Name = name;
            IsDeliverable = isDeliverable;
            Price = price;
            SetInitStock(stock);
        }

        private void SetInitStock(int stock)
        {
            if (stock < 0)
            {
                throw new ArgumentException("Stock value can't be negative", nameof(stock));
            }
            Stock = stock;
        }

        public void SetPrice(float price)
        {
            if (price < 0)
            {
                throw new ArgumentException("Item price can't be negative.", nameof(price));
            }
            Price = price;
        }

        public void AddStock(int quantity) 
        {
            if (quantity > 0)
            {
                Stock += quantity;
            }
        }

        public void DeductStock(int quantity)
        {
            if (Stock - quantity < 0)
            {
                throw new InvalidOperationException("Stock value can't be nagative after deduction");
            }
            if (quantity < 0)
            {
                throw new ArgumentException("Quantity value can't be negative", nameof(quantity));
            }
            Stock -= quantity;
        }

        
    }
}
