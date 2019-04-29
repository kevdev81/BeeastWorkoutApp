using workoutApp.Models;

namespace workoutApp.Interfaces
{
    public interface IUserService
    {
        int Insert(UserInsertRequestModel model);
    }
}