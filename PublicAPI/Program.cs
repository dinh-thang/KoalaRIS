using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Auth;
using Application.Services;
using DataAccess.Data;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using PublicAPI;
using PublicAPI.Endpoints;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options => options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(builder =>
{
    builder.AddPolicy("AllowAllOrigins", builder =>
    {
        builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// DbContext config
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


// Dependencies injection config
builder.Services.AddScoped<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IReservationRepository, ReservationRepository>();

builder.Services.AddScoped<IAccountServices, AccountServices>();
builder.Services.AddScoped<IOrderServices, OrderServices>();
builder.Services.AddScoped<IReservationServices, ReservationServices>();
builder.Services.AddScoped<IStatisticServices, StatisticServices>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



// login
app.MapGet("/login", (string email, IAccountServices accountServices) => AccountEndpoints.Login(email, accountServices));
app.MapGet("/signup", (string username, string email, int phonenumber, AccountType accountType, IAccountServices accountServices) => AccountEndpoints.SignUp(username, email, phonenumber, accountType, accountServices));


// booking
app.MapPost("/booking/make-booking", (Guid accountId, DateTime bookingTime, int bookingQuantity, IReservationServices reservationServices)
    => ReservationEndpoints.MakeBooking(accountId, bookingTime, bookingQuantity, reservationServices));

app.MapPost("/booking/update-booking", (Guid bookingId, DateTime bookingTime, int bookingQuantity, IReservationServices reservationServices)
    => ReservationEndpoints.UpdateBooking(bookingId, bookingTime, bookingQuantity, reservationServices));

app.MapPost("/booking/cancel", (Guid bookingId, IReservationServices reservationServices)
    => ReservationEndpoints.CancelBooking(bookingId, reservationServices));

app.MapGet("/booking/get-all", (Guid accountId, IReservationServices reservationServices)
    => ReservationEndpoints.GetAllBookingsOfAnAccount(accountId, reservationServices));


// admin
app.MapGet("/admin/get-all-booking", (Guid accountId, IReservationServices reservationServices) 
    => ReservationEndpoints.AdminGetAllBookings(accountId, reservationServices));

app.MapGet("/admin/get-total-sale-today", (Guid accountId, IStatisticServices services)
    => StatisticEndpoints.AdminGetTotalSaleToday(accountId, services));

app.MapGet("/admin/get-total-dine-in", (Guid accountId, IStatisticServices services) 
    => StatisticEndpoints.AdminGetTotalDineInOrders(accountId, services));

app.MapGet("/admin/get-total-takeaway", (Guid accountId, IStatisticServices services) 
    => StatisticEndpoints.AdminGetTotalTakeawayOrders(accountId, services));

app.MapGet("/admin/get-total-guests", (Guid accountId, IStatisticServices services) 
    => StatisticEndpoints.AdminGetTotalGuests(accountId, services));


// order
app.MapGet("/order/get-by-id", (Guid orderId, IOrderServices orderServices)
    => OrderEndpoints.GetOrderById(orderId, orderServices));

app.MapPost("/order/make-order", (Guid cart, Guid accountId, IOrderServices orderServices)
    => OrderEndpoints.MakeOrder(cart, accountId, orderServices));

app.MapGet("/order/get-all-for-account", (Guid accountId, IOrderServices orderServices)
    => OrderEndpoints.GetAllOrdersOfAnAccount(accountId, orderServices));

app.MapGet("/order/complete-order", (Guid orderId, IOrderServices orderServices)
    => OrderEndpoints.CompleteOrder(orderId, orderServices));

app.MapPost("/order/add-deli-detail", (Guid orderId, string address, string description, IOrderServices orderServices) 
    => OrderEndpoints.AddDeliveryDetail(orderId, address, description, orderServices));

app.MapPost("/order/add-payment-detail", (Guid orderId, int cardNumber, DateTime expiryDate, int cvc, IOrderServices orderServices)
    => OrderEndpoints.AddPaymentDetail(orderId, cardNumber, expiryDate, cvc, orderServices));


// Cart Endpoints
app.MapGet("/cart/init", (IOrderServices orderServices)
    => OrderEndpoints.InitNewCart(orderServices));

app.MapPost("/cart/add-item-to-cart", (Guid itemId, Guid cartId, IOrderServices orderServices)
    => OrderEndpoints.AddItemToCart(itemId, cartId, orderServices));

app.MapDelete("/cart/remove-item-from-cart", (Guid itemId, Guid cartId, IOrderServices orderServices)
    => OrderEndpoints.RemoveItemFromCart(itemId, cartId, orderServices));


// Item Endpoints
app.MapPost("/item/add-new-item", (string name, float price, string imageUrl, IOrderServices orderServices)
    => OrderEndpoints.CreateNewItem(name, price, imageUrl, orderServices));

app.MapGet("item/get-all-items", (IOrderServices orderServices)
    => OrderEndpoints.GetAllItems(orderServices));

app.MapGet("/item/cart/get-all-items-in-cart", (Guid cartId, IOrderServices orderServices) 
    => OrderEndpoints.GetAllItemsInCart(cartId, orderServices));



app.UseCors("AllowAllOrigins");

app.Run();
