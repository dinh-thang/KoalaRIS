using Application.Abstractions.Services;
using Application.Entities.Auth;
using Application.Entities.Ordering;
using Application.ValueObjects;

namespace PublicAPI
{
    public static class OrderEndpoints
    {
        public static IResult MakeOrder(Guid cart, string email, IOrderServices orderServices)
        {
            Guid orderId = orderServices.CreateOrder(cart, email);
            return Results.Ok(orderId);
        }

        public static IResult GetAllOrders(Guid accountId, IOrderServices ordersServices)
        {
            List<Order> orders = ordersServices.GetAllOrders(accountId);
            return Results.Ok(orders);
        }

        public static IResult GetReceipt(Guid orderId, IOrderServices orderServices)
        {
            PaymentDetail receipt = orderServices.GetReceipt(orderId);
            return Results.Ok(receipt);
        }
    }
}
