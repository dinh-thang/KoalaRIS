using Application.Abstractions.Services;
using Application.Entities.Auth;

namespace PublicAPI.Endpoints
{
    public static class AccountEndpoints
    {
        // check database for email
        public static IResult Login(string email, IAccountServices accountServices)
        {
            Guid result = accountServices.LogIn(email);

            return Results.Ok(result);
        }

        public static IResult SignUp(string username, AccountType accountType, IAccountServices accountServices)
        {
            Guid result = accountServices.SignUp(username, accountType);
            return Results.Ok(result);
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

        public static IResult Update(Guid accountId, int phoneNumber, string email, IAccountServices accountServices)
        {
            Guid id = accountServices.Update(accountId, phoneNumber, email);
            return Results.Ok(id);
        }
    }
}
