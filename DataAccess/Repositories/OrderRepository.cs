using Application.Abstractions.Repos;
using Application.Entities.Ordering;
using DataAccess.Data;

namespace DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _db;

        public OrderRepository(AppDbContext db) 
        {
            _db = db;
        }
        
        // ORDER
        public void AddNewOrder(Order newOrder)
        {
            _db.Orders.Add(newOrder);
            _db.SaveChanges();
        }


        public List<Order> GetAllOrders()
        {
            return _db.Orders.ToList();
        }

        public List<Order> GetOrdersByAccountId(Guid accountId)
        {
            return _db.Orders.Where(o => o.Account.Id == accountId).ToList();
        }

        public Order? GetOrderById(Guid id)
        {
            return _db.Orders.Find(id);
        }

        // CART
        public void AddNewCart(Cart cart)
        {
            _db.Carts.Add(cart);
            _db.SaveChanges();
        }

        public Cart? GetCartById(Guid cartId)
        {
            return _db.Carts.Find(cartId);
        }

        public void UpdateCart(Cart cart)
        {
            _db.Carts.Update(cart);
            _db.SaveChanges();
        }

        // ITEM
        public Item? GetItemById(Guid itemId)
        {
            return _db.Items.Find(itemId);
        }

        public void AddItem(Item item)
        {            
            _db.Items.Add(item);
            _db.SaveChanges();
        }
    }
}
