using Application.Abstractions.Services;
using Application.Entities.Auth;

namespace PublicAPI.Endpoints
{
    public static class AccountEndpoints
    {
        // check database for email
        public static IResult Login(string email, IAccountServices accountServices)
        {
            Guid id = accountServices.LogIn(email);

            return Results.Ok(id);
        }

        // basically create a new account
        public static IResult SignUp(string username, string email, int phonenumber, AccountType accountType, IAccountServices accountServices)
        {
            Guid id = accountServices.SignUp(username, email, phonenumber, accountType);
            return Results.Ok(id);
        }

        public static IResult GetAllStaffAccount(IAccountServices accountServices)
        {
            List<Account> result = accountServices.GetAllStaff();
            return Results.Ok(result);
        }

        public static IResult GetAllCustomer(IAccountServices accountServices)
        {
            List<Account> result = accountServices.GetAllCustomer();
            return Results.Ok(result);
        }
    }
}
