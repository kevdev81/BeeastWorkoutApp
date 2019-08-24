using workoutApp.Models.User;

namespace workoutApp.Interfaces
{
    public interface IUserService
    {
        UserModel Login(UserLoginRequestModel req);
        int Register(UserInsertRequestModel model);
    }
}