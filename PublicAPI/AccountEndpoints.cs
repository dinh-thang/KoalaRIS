using Application.Abstractions.Services;
using Application.Entities.Auth;

namespace PublicAPI
{
    public static class AccountEndpoints
    {
        public static IResult Login(Account account, IAccountServices accountServices)
        {
            bool result = accountServices.Login(account);
            return Results.Ok(result);
        }

        public static IResult Logout(Account account, IAccountServices accountServices)
        {
            bool result = accountServices.Logout(account);
            return Results.Ok(result);
        }
    }
}
