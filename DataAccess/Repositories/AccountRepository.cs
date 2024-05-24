using Application.Abstractions.Repos;
using Application.Entities.Auth;
using DataAccess.Data;

namespace DataAccess.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly AppDbContext _db;
        
        public AccountRepository(AppDbContext db)
        {
            _db = db;
        }

        public bool Add(Account newAccount)
        {
            throw new NotImplementedException();
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Account> GetAll()
        {
            throw new NotImplementedException();
        }

        public Account GetById(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
