using Application.Abstractions.Services;
using Application.Entities.Auth;

namespace PublicAPI.Endpoints
{
    public static class AccountEndpoints
    {
        public static IResult Login(Account account, IAccountServices accountServices)
        {
            bool result = accountServices.SignUp(account);
            return Results.Ok(result);
        }
    }
}
