using workoutApp.Models.LoginRegister;
using workoutApp.Models.User;

namespace workoutApp.Interfaces
{
    public interface IUserService
    {
        UserModel Login(UserLoginRequestModel req);

        //LoginUserModel Get(string email);

        //LoginRequest GetByEmail(string email);
        int Register(UserInsertRequestModel model);
    }
}