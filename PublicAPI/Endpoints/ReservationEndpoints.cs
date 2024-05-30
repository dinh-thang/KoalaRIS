using Application.Abstractions.Services;

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
    }
}
