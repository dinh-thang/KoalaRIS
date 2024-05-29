namespace Application.Entities.Ordering
{
    public class Cart
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public IList<Item> Items { get; set; }

        public Cart()
        {
            Id = Guid.NewGuid();
            Items = new List<Item>();
        }

        public float GetTotalPrice()
        {
            float totalPrice = 0;
            
            foreach (Item item in Items)
            {
                totalPrice += item.Price;
            }
            return totalPrice;
        }

        public void AddItem(Item item)
        {
            Items.Add(item);
        }

        public void RemoveItem(Item item)
        {
            Items.Remove(item);
        }

        public int GetQuantity()
        {
            return Items.Count;
        }
    }
}
