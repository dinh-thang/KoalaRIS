﻿using Application.Abstractions.Services;
using Application.Entities.Ordering;
using Application.ValueObjects;

namespace PublicAPI
{
    public static class OrderEndpoints
    {
        // ORDER
        public static IResult GetOrderById(Guid orderId, IOrderServices orderServices)
        {
            Order? order = orderServices.GetOrderById(orderId);
            return Results.Ok(order);
        }
        public static IResult MakeOrder(Guid cart, Guid accountId, IOrderServices orderServices)
        {
            Guid orderId = orderServices.CreateOrder(cart, accountId);
            return Results.Ok(orderId);
        }
        public static IResult GetAllOrdersOfAnAccount(Guid accountId, IOrderServices ordersServices)
        {
            List<Order> orders = ordersServices.GetAllOrdersOfAnAccount(accountId);
            return Results.Ok(orders);
        }
        public static IResult CompleteOrder(Guid orderId, IOrderServices orderServices)
        {
            orderServices.CompleteOrder(orderId);
            return Results.Ok();
        }
        public static IResult AddDeliveryDetail(Guid orderId, string address, string description, IOrderServices orderServices)
        {
            orderServices.UpdateDeliveryDetail(orderId, address, description);
            return Results.Ok();    
        }
        public static IResult AddPaymentDetail(Guid orderId, int cardNumber, DateTime expiryDate, int cvc, IOrderServices orderServices)
        {
            orderServices.UpdatePaymentDetail(orderId, cardNumber, expiryDate, cvc);
            return Results.Ok();    
        }

        // CART
        public static IResult InitNewCart(IOrderServices orderServices)
        {
            Guid cartId = orderServices.CreateNewCart();
            return Results.Ok(cartId);
        }
        public static IResult AddItemToCart(Guid itemId, Guid cartId, IOrderServices orderServices)
        {
            orderServices.AddNewItemToCart(cartId, itemId);
            return Results.Ok();
        }
        public static IResult GetAllItemsInCart(Guid cartId, IOrderServices orderServices)
        {
            List<Item> items = orderServices.GetAllItemInCart(cartId);
            return Results.Ok(items);
        }
        public static IResult RemoveItemFromCart(Guid itemId, Guid cartId, IOrderServices orderServices)
        {
            orderServices.RemoveItemFromCart(cartId, itemId);
            return Results.Ok();
        }


        // ITEM 
        public static IResult CreateNewItem(string name, float price, string imageUrl, IOrderServices orderServices)
        {
            orderServices.CreateNewItem(name, price, imageUrl);
            return Results.Ok();
        }
        public static IResult GetAllItems(IOrderServices orderServices)
        {
            List<Item> items = orderServices.GetAllItems();  
            return Results.Ok(items);
        }
    }
}
