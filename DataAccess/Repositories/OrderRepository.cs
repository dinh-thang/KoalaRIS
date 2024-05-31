﻿using Application.Abstractions.Repos;
using Application.Entities.Ordering;
using DataAccess.Data;
using Microsoft.EntityFrameworkCore;

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
            return _db.Orders
                .Include(c => c.Cart)
                .Include(i => i.Cart.Items)
                .Include(a => a.Account)
                .ToList();
        }

        public List<Order> GetOrdersByAccountId(Guid accountId)
        {
            return _db.Orders
                .Include(c => c.Cart)
                .Include(a => a.Account)
                .Include(i => i.Cart.Items)
                .Where(o => o.Account.Id == accountId)
                .ToList();
        }

        public Order? GetOrderById(Guid id)
        {
            return _db.Orders
                .Include(c => c.Cart)
                .Include(i => i.Cart.Items)
                .Include(a => a.Account)
                .FirstOrDefault(o => o.Id == id);
        }

        public void UpdateOrder(Order newOrder)
        {
            _db.Orders.Update(newOrder);
            _db.SaveChanges();
        }


        // CART
        public void AddNewCart(Cart cart)
        {
            _db.Carts.Add(cart);
            _db.SaveChanges();
        }

        public List<Item> GetAllItemInCart(Guid cartId)
        {
            Cart? cart = _db.Carts
                .Include(c => c.Items)
                .FirstOrDefault(c => c.Id == cartId);

            if (cart == null)
            {
                throw new NullReferenceException();
            }
            return cart.Items;
        }

        public Cart? GetCartById(Guid cartId)
        {
            return _db.Carts
                .Include(i => i.Items)
                .FirstOrDefault(c => c.Id == cartId);
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

        public List<Item> GetAllItems()
        {
            return _db.Items.ToList();
        }

        public void DeleteItem(Item item)
        {
            _db.Items.Remove(item);
        }
    }
}
