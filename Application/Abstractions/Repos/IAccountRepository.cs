﻿using Application.Entities.Auth;

namespace Application.Abstractions.Repos
{
    public interface IAccountRepository
    {
        public void Add(Account newAccount);
        public Account? GetById(Guid id);
        public Account? GetByUserName(string username);
        public List<Account> GetAll();
        public void Delete(Guid id);

    }
}
