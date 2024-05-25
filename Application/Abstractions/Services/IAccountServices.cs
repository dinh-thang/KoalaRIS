using Application.Entities.Auth;

namespace Application.Abstractions.Services
{
    public interface IAccountServices
    {
        public bool Login(Account aAccount);
        public bool Logout(Account aAccount);
        public List<Account> GetAllCustomer();
        public List<Account> GetAllStaff();
    }
}
    