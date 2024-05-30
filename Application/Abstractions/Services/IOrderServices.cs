using Application.Entities.Ordering;
using Application.ValueObjects;

namespace Application.Abstractions.Services
{
    public interface IOrderServices
    {
        // ORDER
        public Order? GetOrderById(Guid orderId);
        public List<Order> GetAllOrdersOfAnAccount(Guid accountId);
        public Guid CreateOrder(Guid cartId, Guid accountId);
        public PaymentDetail GetReceipt(Guid orderId);

        // CART
        public Guid CreateNewCart();
        public Guid AddNewItemToCart(Guid cartId, Guid itemId);
        public Guid RemoveItemFromCart(Guid cartId, Guid itemId);
        public List<Item> GetAllItemInCart(Guid cartId);
        public List<Item> GetAllItems()


        // ITEM
        public Guid CreateNewItem(string name, float price, string imageUrl);
    }
}
