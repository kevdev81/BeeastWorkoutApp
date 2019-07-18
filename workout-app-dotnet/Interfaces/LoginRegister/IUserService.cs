using workoutApp.Models.LoginRegister;
using workoutApp.Models.LoginRegister.LoginRequest;

namespace workoutApp.Interfaces.LoginRegister
{
    public interface IUserService
    {
        CurrentUser LoginAuth(LoginRequest req);

        LoginUserModel Get(string email);

        //LoginRequest GetByEmail(string email);
        int Register(UserInsertRequestModel model);
    }
}