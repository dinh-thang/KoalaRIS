using Application.Abstractions.Services;
using Application.Entities.Auth;

namespace PublicAPI.Endpoints
{
    public static class AccountEndpoints
    {
        // check database for email
        public static IResult Login(string email, IAccountServices accountServices)
        {
            bool result = accountServices.LogIn(email);
            return Results.Ok(result);
        }

        // basically create a new account
        public static IResult SignUp(string username, string email, int phonenumber, AccountType accountType, IAccountServices accountServices)
        {
            throw new NotImplementedException();
        }

        public static IResult GetAllStaffAccount(IAccountServices accountServices)
        {
            throw new NotImplementedException();
        }

        public static IResult GetAllCustomer(IAccountServices accountServices)
        {
            throw new NotImplementedException();
        }
    }
}
