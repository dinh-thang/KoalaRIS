using Application.Abstractions.Services;
using Application.Entities;

namespace PublicAPI
{
    public static class ReservationEndpoints
    {
        public static IResult MakeBooking(Guid accountId, DateTime bookingTime, int bookingQuantity, IReservationServices reservationServices)
        {
            reservationServices.MakeReservation(accountId, bookingTime, bookingQuantity);   
            return Results.Ok();
        }

        public static IResult UpdateBooking(Guid reservationId, DateTime bookingTime, int bookingQuantity, IReservationServices reservationServices)
        {
            reservationServices.UpdateReservation(reservationId, bookingTime, bookingQuantity);
            return Results.Ok();
        }

        public static IResult CancelBooking(Guid bookingId, IReservationServices reservationService)
        {
            reservationService.CancelReservation(bookingId);
            return Results.Ok();
        }

        public static IResult AdminGetAllBookings(Guid accountId, IReservationServices reservationServices)
        {
            List<Reservation> bookings = reservationServices.AdminGetAllReservations(accountId);
            return Results.Ok(bookings);
        }

        public static IResult GetAllBookingsOfAnAccount(Guid accountId, IReservationServices reservationServices)
        {
            List<Reservation> bookings = reservationServices.GetAllReservationsOfACustomer(accountId);
            return Results.Ok(bookings);
        }
    }
}
