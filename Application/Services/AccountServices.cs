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

        public Guid SignUp(string userName, AccountType accountType)
        {
            Account newAccount = new Account(userName, accountType);
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

        public Guid LogIn(string username)
        {   
            Account? account = _repo.GetByUserName(username);
                
            if (account == null)
            {
                throw new ArgumentException($"Failed to login:");

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

        public Guid Update(Guid accountId, int phoneNumber, string email)
        {
            Account? account = _repo.GetById(accountId);

            if (account == null)
            {
                throw new ArgumentException($"Failed to login:");
            }
            account.SetPhoneNumber(phoneNumber);
            account.SetEmail(email);    
            return account.Id;
        }
    }
}
