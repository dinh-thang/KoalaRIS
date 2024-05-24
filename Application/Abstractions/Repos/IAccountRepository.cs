using Application.Entities.Auth;

namespace Application.Abstractions.Repos
{
    public interface IAccountRepository
    {
        public bool Add(Account newAccount);
        public Account GetById(Guid id);
        public List<Account> GetAll();
        public bool Delete(Guid id);

    }
}
