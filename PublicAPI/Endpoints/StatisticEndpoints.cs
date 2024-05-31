using Application.Abstractions.Services;

namespace PublicAPI.Endpoints
{
    public static class StatisticEndpoints
    {
        public static IResult AdminGetTotalSaleToday(Guid accountId, IStatisticServices services)
        {
            return Results.Ok(services.AdminTotalSaleToday(accountId));
        }

        public static IResult AdminGetTotalDineInOrders(Guid accountId, IStatisticServices services)
        {
            return Results.Ok(services.AdminTotalDineInOrders(accountId));
        }

        public static IResult AdminGetTotalTakeawayOrders(Guid accountId, IStatisticServices services)
        {
            return Results.Ok(services.AdminTotalTakeawayOrders(accountId));
        }

        public static IResult AdminGetTotalGuests(Guid accountId, IStatisticServices services)
        {
            return Results.Ok(services.AdminTotalGuests(accountId));
        }
    }
}
