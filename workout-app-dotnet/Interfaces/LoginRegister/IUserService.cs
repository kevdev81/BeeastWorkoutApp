using workoutApp.Models.LoginRegister;
using workoutApp.Models.LoginRegister.LoginRequest;

namespace workoutApp.Interfaces.LoginRegister
{
    public interface IUserService
    {
        int LoginCheck(LoginRequest req);

        //LoginRequest GetByEmail(string email);
        int Insert(UserInsertRequestModel model);
    }
}