using workoutApp.Models.StrengthProfile;

namespace workoutApp.Interfaces
{
    public interface IStrengthProfileService
    {
        int Insert(StrengthProfileInsertRequest req);
    }
}