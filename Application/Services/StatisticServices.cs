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

        private bool IsAdmin(Guid accountId)
        {
            Account? account = _accountRepo.GetById(accountId);
            if (account == null)
            {
                throw new ArgumentException("Cant find account with id:" + accountId.ToString());
            }
            
            if (account.AccountType != AccountType.Staff)
            {
                return false;
            }
            return true;
        }

        public int AdminTotalDineInOrders(Guid accountId)
        {
            if (!IsAdmin(accountId))
            {
                throw new InvalidOperationException("Only staff can access the apis.");
            }
            int total = 0;

            foreach (Order order in _orderRepo.GetAllOrders())
            {
                if (order.DeliveryDetail == null)
                {
                    total++;
                }
            }
            return total;
        }

        public int AdminTotalGuests(Guid accountId)
        {
            if (!IsAdmin(accountId))
            {
                throw new InvalidOperationException("Only staff can access the apis.");
            }
            int sumGuest = 0;

            foreach (Reservation booking in _bookingRepo.GetAll())
            {
                sumGuest += booking.ReserveQuantity;
            }
            return sumGuest;
        }

        public float AdminTotalSaleToday(Guid accountId)
        {
            if (!IsAdmin(accountId))
            {
                throw new InvalidOperationException("Only staff can access the apis.");
            }
            float totalSale = 0;

            foreach (Order order in _orderRepo.GetAllOrders())
            {
                if (order.Created == DateTime.Now)
                {
                    totalSale += order.Cart.GetTotalPrice();
                }
            }
            return totalSale;
        }

        public int AdminTotalTakeawayOrders(Guid accountId)
        {
            if (!IsAdmin(accountId))
            {
                throw new InvalidOperationException("Only staff can access the apis.");
            }
            int total = 0;

            foreach (Order order in _orderRepo.GetAllOrders())
            {
                if (order.DeliveryDetail != null)
                {
                    total++;
                }
            }
            return total;
        }
    }
}
