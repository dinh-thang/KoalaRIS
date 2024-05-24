using Application.Entities.Auth;

namespace Application.Abstractions.Services
{
    public interface IAccountServices
    {
        public bool Login(string email);
        public List<Account> GetAllCustomer();
        public List<Account> GetAllStaff();
    }
}
    