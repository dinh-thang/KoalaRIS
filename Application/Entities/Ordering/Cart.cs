namespace Application.Entities.Ordering
{
    public class Cart
    {
        public Guid Id { get; private set; }
        public Guid? OrderId { get; set; } 
        public List<Item> Items { get; private set; }

        public Cart()
        {
            Id = Guid.NewGuid();
            Items = new List<Item>();
        }

        public float GetTotalPrice()
        {
            return Items.Sum(item => item.Price);
        }

        public void AddItem(Item item)
        {
            Items.Add(item);
        }

        public void RemoveItem(Item item)
        {
            Items.Remove(item);
        }
    }
}
