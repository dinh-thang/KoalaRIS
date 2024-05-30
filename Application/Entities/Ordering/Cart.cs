using System;
using System.Collections.Generic;
using System.Linq;

namespace Application.Entities.Ordering
{
    public class Cart
    {
        public Guid Id { get; private set; }
        public IList<Item> Items { get; private set; }

        public Cart()
        {
            Id = Guid.NewGuid();
            Items = new List<Item>();
        }

        public float GetTotalPrice()
        {
            return Items.Sum(item => item.Price);
        }

        public void AddItem(Item item, int quantity)
        {
            
            if (item.Stock < quantity)
            {
                //implement notification for out of stock
            }

            item.DeductStock(quantity);

            for (int i = 0; i < quantity; i++)
            {
                Items.Add(item);
            }
        }

        public void RemoveItem(Item item, int quantity)
        {
            var itemsToRemove = Items.Where(i => i.Id == item.Id).Take(quantity).ToList();

            foreach (var itemToRemove in itemsToRemove)
            {
                Items.Remove(itemToRemove);
                item.AddStock(1);
            }
        }

        public bool AllItemsDeliverable()
        {
            return Items.All(item => item.IsDeliverable);
        }
    }
}
