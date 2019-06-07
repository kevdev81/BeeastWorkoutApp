using workoutApp.Models.StrengthProfile;
using workoutApp.Models.StrengthProfile.StrengthProfile;

namespace workoutApp.Interfaces
{
    public interface IStrengthProfileService
    {
        int Insert(StrengthProfileInsertRequest req);
        StrengthProfile GetByUserId(int UserId);

        //void Update(int UserId);
    }
}