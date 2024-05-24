namespace Application.Entities.Auth
{
    public class Account
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
        public string Email { get; private set; } = "";
        public int PhoneNumber { get; private set; }
        public AccountType AccountType { get; init; } 

        public Account(string name, string email, int phoneNumber, AccountType accountType)
        {
            Id = Guid.NewGuid();
            Name = name;
            Email = email;
            PhoneNumber = phoneNumber;
            AccountType = accountType;
        }

        public void SetEmail(string email) 
        {
            throw new NotImplementedException();
        }

        public void SetPhoneNumber(int phoneNumber)
        {
            throw new NotImplementedException();
        }
    }
}
