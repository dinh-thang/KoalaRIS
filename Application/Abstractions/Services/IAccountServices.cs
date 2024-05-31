using Application.Entities.Auth;

namespace Application.Abstractions.Services
{
    public interface IAccountServices
    {
        public Guid SignUp(string userName, AccountType accountType);
        public Guid LogIn(string username);
        public List<Account> GetAllCustomer();
        public List<Account> GetAllStaff();
        public Guid Update(Guid accountId, int phoneNumber, string email);
    }
}
    