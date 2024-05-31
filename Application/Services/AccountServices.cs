using Application.Abstractions.Repos;
using Application.Abstractions.Services;
using Application.Entities.Auth;

namespace Application.Services
{

    public class AccountServices : IAccountServices
    {
        private readonly IAccountRepository _repo;

        public AccountServices(IAccountRepository repo)
        {
            _repo = repo;
        }

        public Guid SignUp(string userName, string email, int phoneNumber, AccountType accountType)
        {
            Account newAccount = new Account(userName, email, phoneNumber, accountType);
            try
            {
                _repo.Add(newAccount);
            }
            catch (ArgumentException ex)
            {
                throw new ArgumentException($"Failed to create account: {ex.Message}", ex);
            }
            return newAccount.Id;
        } 

        public Guid LogIn(string email)
        {   
            Account? account = _repo.GetByEmail(email);
                
            if (account == null)
            {
                throw new ArgumentException($"{email} was not found.");
            }
            return account.Id;
        }

        public List<Account> GetAllCustomer()
        {
            List<Account> accounts = _repo.GetAll(); 
            List<Account> result = new List<Account>();

            foreach (Account a in accounts)
            {
                if (a.AccountType == AccountType.Customer)
                {
                    result.Add(a);
                }
            }

            return result;
        }

        public List<Account> GetAllStaff()
        {
            List<Account> accounts = _repo.GetAll();
            List<Account> result = new List<Account>();

            foreach (Account a in accounts)
            {
                if (a.AccountType == AccountType.Staff)
                {
                    result.Add(a);
                }
            }

            return result;
        }
    }
}
