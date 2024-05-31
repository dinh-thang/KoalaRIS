using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace Application.Entities.Auth
{
    public class Account
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
        public string Email { get; private set; } = "";
        public int PhoneNumber { get; private set; }
        public AccountType AccountType { get; init; }

        public Account()
        {
            
        }

        public Account(string name, AccountType accountType)
        {
            Id = Guid.NewGuid();
            Name = name;
            AccountType = accountType;
        }

        public void SetEmail(string email) 
        {
            if (EmailIsValid(email))
            {
                Email = email;
            }
            else
            {
                throw new ArgumentException("Invalid Email", nameof(email));
            }
        }

        public void SetPhoneNumber(int phoneNumber)
        {
            //assuming the phone number is australian
            if (IsValidAustralianPhoneNumber(phoneNumber.ToString()))
            {
                PhoneNumber = phoneNumber;
            }
            else
            {
                throw new ArgumentException("Invalid Australian phone number");
            }
        }

        private static bool EmailIsValid(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
                return false;

            try
            {
                string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";
                Regex regex = new Regex(pattern, RegexOptions.IgnoreCase);
                return regex.IsMatch(email);
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }
        }

        private static bool IsValidAustralianPhoneNumber(string phoneNumber)
        {
            if (string.IsNullOrWhiteSpace(phoneNumber))
                return false;

            try
            {
                string pattern = @"^0?(4\d{8}|[2378]\d{7})$";
                Regex regex = new Regex(pattern);
                return regex.IsMatch(phoneNumber);
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }
        }
    }
}
