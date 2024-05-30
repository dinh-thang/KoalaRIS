using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities;
using Application.Entities.Auth;
using Application.Entities.Ordering;

namespace Application.Services
{
    public class StatisticServices : IStatisticServices
    {
        private readonly IOrderRepository _orderRepo;
        private readonly IAccountRepository _accountRepo;
        private readonly IReservationRepository _bookingRepo;

        public StatisticServices(IOrderRepository orderRepo, IAccountRepository accountRepo, IReservationRepository bookingRepo)
        {
            _orderRepo = orderRepo;
            _accountRepo = accountRepo;
            _bookingRepo = bookingRepo;
        }

        public List<Item> AdminBestSeller()
        {
            throw new NotImplementedException();
        }

        public int AdminTotalDineInOrders()
        {
            //int total = 0;

            //foreach (Order order in )
            throw new NotSupportedException();
        }

        public int AdminTotalGuests()
        {
            int sumGuest = 0;

            foreach (Reservation booking in _bookingRepo.GetAll())
            {
                sumGuest += booking.ReserveQuantity;
            }
            return sumGuest;
        }

        public float AdminTotalSaleToday()
        {
            float totalSale = 0;

            foreach (Order order in _orderRepo.GetAllOrders())
            {
                totalSale += order.GenerateReceipt().Total;
            }
            return totalSale;
        }

        public int AdminTotalTakeawayOrders()
        {
            int totalTakeaway = 0;

            foreach (Order order in _orderRepo.GetAllOrders())
            {
                
            }
            return totalTakeaway;
        }
    }
}
