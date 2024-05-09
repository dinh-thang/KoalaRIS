namespace Application.Entities.Ordering
{
    public class Item : BaseEntity
    {
        public string Name { get; set; } = "";
        public int Price { get; set; } 
        public int Stock { get; private set; }
        public bool Deliverable { get; set; } = false;

        // relational properties
        // int? means this property can be null. This creates a one-to-one link to a Cart.
        public int? CartID { get; set; }

        public Item(string name, int price, bool deliverable)
        {
            Name = name;
            Price = price;
            Deliverable = deliverable;
        }

        // the Stock is manually added and deducted since the quantity should be checked for negativity.
        public void AddStock(int quantity) 
        {
            if (quantity > 0)
            {
                Stock += quantity;
            }
        }

        public void DeductStock(int quantity)
        {
            if (quantity > 0 && Stock - quantity >= 0)
            {
                Stock -= quantity;
            }
        }
    }
}
