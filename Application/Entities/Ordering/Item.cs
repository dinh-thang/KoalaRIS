namespace Application.Entities.Ordering
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public float Price { get; private set; } 

        public List<Cart> Carts { get; private set; }

        public Item() { }

        public Item(string name, float price, string imageUrl)
        {
            Id = Guid.NewGuid();
            Name = name;
            ImageUrl = imageUrl;
            SetPrice(price);
        }

        private void SetPrice(float price)
        {
            if (price < 0)
            {
                throw new ArgumentException("Item price can't be negative.", nameof(price));
            }
            Price = price;
        }
    }
}
