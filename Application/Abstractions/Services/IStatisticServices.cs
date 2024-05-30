using Application.Entities.Ordering;

namespace Application.Abstractions.Services
{
    public interface IStatisticServices
    {
        public float AdminTotalSaleToday();
        public int AdminTotalDineInOrders();
        public int AdminTotalTakeawayOrders();
        public int AdminTotalGuests();
        public List<Item> AdminBestSeller();
    }
}
