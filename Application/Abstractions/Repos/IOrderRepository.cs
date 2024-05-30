using Application.Entities.Ordering;

namespace Application.Abstractions.Repos
{
    public interface IOrderRepository
    {
        // order
        public List<Order> GetAllOrders();
        public Order? GetOrderById(Guid orderId);
        public List<Order> GetOrdersByAccountId(Guid accountId);
        public void AddNewOrder(Order newOrder);

        // cart
        public void AddNewCart(Cart cart);
        public Cart? GetCartById(Guid cartId);
        public void UpdateCart(Cart cart);

        // item
        public Item? GetItemById(Guid itemId);
        public void AddItem(Item item);
    }
}
