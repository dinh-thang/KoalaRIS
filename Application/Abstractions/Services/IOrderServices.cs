using Application.Entities.Ordering;

namespace Application.Abstractions.Services
{
    public interface IOrderServices
    {
        // ORDER
        public Order? GetOrderById(Guid orderId);
        public List<Order> GetAllOrdersOfAnAccount(Guid accountId);
        public Guid CreateOrder(Guid cartId, Guid accountId);
        public bool UpdateDeliveryDetail(Guid orderId, string address, string description);
        public bool UpdatePaymentDetail(Guid orderId, int cardNumber, DateTime expiryDate, int cvc);
        public void CompleteOrder(Guid orderId);


        // CART
        public Guid CreateNewCart();
        public List<Item> GetAllItemInCart(Guid cartId);
        public Guid AddNewItemToCart(Guid cartId, Guid itemId);
        public Guid RemoveItemFromCart(Guid cartId, Guid itemId);


        // ITEM
        public Guid CreateNewItem(string name, float price, string imageUrl);
        public List<Item> GetAllItems();
    }
}
