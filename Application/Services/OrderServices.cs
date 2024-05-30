using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Auth;
using Application.Entities.Ordering;
using Application.ValueObjects;

namespace Application.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IAccountRepository _accountRepository;

        public OrderServices(IOrderRepository orderRepository, IAccountRepository accountRepository)
        {
            _orderRepository = orderRepository;
            _accountRepository = accountRepository;
        }
        
        // CART
        public Guid AddNewItemToCart(Guid cartId, Guid itemId)
        {
            Cart? cart = _orderRepository.GetCartById(cartId);
            if (cart == null)
            {
                throw new ArgumentException("Can't find cart with id:" + cartId.ToString());
            }

            Item? item = _orderRepository.GetItemById(itemId);
            if (item == null)
            {
                throw new ArgumentException("Can't find item with id:" + itemId.ToString());
            }

            cart.AddItem(item);
            _orderRepository.UpdateCart(cart);
            return itemId;
        }

        public Guid CreateNewItem(string name, float price, string imageUrl)
        {
            Item item = new Item(name, price, imageUrl);
            _orderRepository.AddItem(item);
            return item.Id;
        }

        public Guid RemoveItemFromCart(Guid cartId, Guid itemId)
        {
            Cart? cart = _orderRepository.GetCartById(cartId);
            if (cart == null)
            {
                throw new ArgumentException("Can't find cart with id:" + cartId.ToString());
            }

            Item? item = _orderRepository.GetItemById(itemId);
            if (item == null)
            {
                throw new ArgumentException("Can't find item with id:" + itemId.ToString());
            }

            cart.RemoveItem(item);
            _orderRepository.UpdateCart(cart);
            return itemId;
        }

        // ORDER
        public Guid CreateOrder(Guid cartId, Guid accountId)
        {
            Account? account = _accountRepository.GetById(accountId);
            if (account == null)
            {
                throw new ArgumentException("Can't find account with id:" + accountId.ToString());
            }

            Cart? cart = _orderRepository.GetCartById(cartId);
            if (cart == null)
            {
                throw new ArgumentException("Cant't find cart with id:" + cartId.ToString());
            }

            Order order = new Order(account, cart);

            _orderRepository.AddNewOrder(order);
            return order.Id;
        }

        public List<Order> GetAllOrdersOfAnAccount(Guid accountId)
        {
            return _orderRepository.GetOrdersByAccountId(accountId);
        }

        public Order? GetOrderById(Guid id)
        {
            return _orderRepository.GetOrderById(id);
        }

        public PaymentDetail GetReceipt(Guid orderId)
        {
            Order? order = _orderRepository.GetOrderById(orderId);
            if (order == null)
            {
                throw new ArgumentException("Can't find order with id:" + orderId.ToString());
            }
            return order.GenerateReceipt();
        }
    }
}


