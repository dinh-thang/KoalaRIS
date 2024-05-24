using Application.Abstractions.Services;

namespace PublicAPI
{
    public static class AccountEndpoints
    {
        public static IResult Login(string email, IAccountServices accountServices)
        {
            bool result = accountServices.Login(email);
            return Results.Ok(result);
        }
    }
}
