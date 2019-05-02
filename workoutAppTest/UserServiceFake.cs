using System.Reflection.Metadata;
using workoutApp.Interfaces;
using workoutApp.Models;

public class UserServiceFake : IUserService
{
    private readonly UserInsertRequestModel _registrationInfo;

    public int InsertCorrectRegistration(UserInsertRequestModel model)
    {
        model.Email = "xUnitTesting@gmail.com";
        model.Password = "Password1!";
        model.PasswordConfirm = "Password1!";

        return IUserService.Insert(model);

    }
}