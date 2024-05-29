using Application.Entities.Auth;

namespace Application.Abstractions.Services
{
    public interface IAccountServices
    {
        public bool SignUp(string userName, string email, int phoneNumber, AccountType accountType);
        public bool LogIn(string email);
        public List<Account> GetAllCustomer();
        public List<Account> GetAllStaff();
    }
}
    