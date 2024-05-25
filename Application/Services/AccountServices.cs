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

        public bool SignUp(string userName, string email, int phoneNumber, AccountType accountType) //when signup button is clicked
        {
            //new Account
            try
            {
                Account newAccount = new Account(userName, email, phoneNumber, accountType);
                _repo.Add(newAccount);
                Console.WriteLine("Account created."); //signal GUI sucessful
            }
            catch (ArgumentException ex)
            {
                throw new ArgumentException($"Failed to create account: {ex.Message}", ex);
            }
            return true;
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
