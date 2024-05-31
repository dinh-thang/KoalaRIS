using Application.Entities.Auth;

namespace Application.Abstractions.Services
{
    public interface IAccountServices
    {
        public Guid SignUp(string userName, string email, int phoneNumber, AccountType accountType);
        public Guid LogIn(string email);
        public List<Account> GetAllCustomer();
        public List<Account> GetAllStaff();
    }
}
    