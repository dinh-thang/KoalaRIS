using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Services;
using DataAccess.Data;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using PublicAPI.Endpoints;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
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

// booking
app.MapPost("/make-booking", (Guid accountId, DateTime bookingTime, int bookingQuantity, IReservationServices reservationServices)
    => ReservationEndpoints.MakeBooking(accountId, bookingTime, bookingQuantity, reservationServices));

app.MapPost("/update-booking", (Guid bookingId, DateTime bookingTime, int bookingQuantity, IReservationServices reservationServices)
    => ReservationEndpoints.UpdateBooking(bookingId, bookingTime, bookingQuantity, reservationServices));

app.MapPost("/cancel-booking", (Guid bookingId, IReservationServices reservationServices)
    => ReservationEndpoints.CancelBooking(bookingId, reservationServices));

app.MapGet("/get-all-bookings-of-account", (Guid accountId, IReservationServices reservationServices)
    => ReservationEndpoints.GetAllBookingsOfAnAccount(accountId, reservationServices));

// admin
app.MapGet("admin-get-all-bookings", (Guid accountId, IReservationServices reservationServices) 
    => ReservationEndpoints.AdminGetAllBookings(accountId, reservationServices));



app.MapGet("/signup", (string username, string email, int phonenumber, AccountType accountType, IAccountServices accountServices) => AccountEndpoints.SignUp(username, email, phonenumber, accountType, accountServices));

app.UseCors("AllowAllOrigins");

app.Run();
