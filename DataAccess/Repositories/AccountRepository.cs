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

        public void Add(Account newAccount)
        {
            _db.Accounts.Add(newAccount);
            _db.SaveChanges();
        }

        public void Delete(Guid id)
        {
            Account account = _db.Accounts.Single(a => a.Id == id); //return a single element that satisfy condition, if not throw error.
            
            _db.Accounts.Remove(account);
            _db.SaveChanges();
        }

        public List<Account> GetAll()
        {
            return _db.Accounts.ToList();
        }

        public Account? GetById(Guid id)
        {
            return _db.Accounts.Single(a => a.Email == email);
        }
    }
}
