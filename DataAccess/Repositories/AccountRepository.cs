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
            if (GetById(id) != null)
            {
                _db.Accounts.Remove(GetById(id)!);
                _db.SaveChanges();
            }            
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
