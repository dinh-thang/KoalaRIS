namespace Application.Abstractions.Services
{
    public interface IStatisticServices
    {
        public float AdminTotalSaleToday(Guid accountId);
        public int AdminTotalDineInOrders(Guid accountId);
        public int AdminTotalTakeawayOrders(Guid accountId);
        public int AdminTotalGuests(Guid accountId);
    }
}
