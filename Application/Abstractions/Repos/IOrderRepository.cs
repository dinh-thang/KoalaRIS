using Application.Entities.Ordering;

namespace Application.Abstractions.Repos
{
    public interface IOrderRepository
    {
        // ORDER
        public List<Order> GetAllOrders();
        public Order? GetOrderById(Guid orderId);
        public List<Order> GetOrdersByAccountId(Guid accountId);
        public void AddNewOrder(Order newOrder);
        public void UpdateOrder(Order newOrder);

        // CART
        public Cart? GetCartById(Guid cartId);
        public List<Item> GetAllItemInCart(Guid cartId);
        public void AddNewCart(Cart cart);
        public void UpdateCart(Cart cart);

        // ITEM
        public List<Item> GetAllItems();
        public Item? GetItemById(Guid itemId);
        public void AddItem(Item item);
        public void DeleteItem(Item item);
    }
}
