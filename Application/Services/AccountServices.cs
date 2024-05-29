using Application.Abstractions.Repos;
using Application.Abstractions.Services;

namespace Application.Services
{

    public class AccountServices : IAccountServices
    {
        private readonly IAccountRepository _db;

        public AccountServices()
        {
        }

        // only requires user name to login. Create a
        public bool Login(string userName)
        {
            throw new NotImplementedException();
        }

        public bool Logout(string userName) 
        {
            throw new NotImplementedException();
        }

        public bool SignUp(string userName) 
        {
            _db.AddAccount(userName);
        } // add to db

    }
}
