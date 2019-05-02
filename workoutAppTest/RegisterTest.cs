using System;
using workoutApp.Controllers;
using workoutApp.Interfaces;
using workoutApp.Models;
using workoutApp.Models.Responses;
using Xunit;

namespace workoutAppTest
{
    public class RegisterControllerTest
    {
        private readonly UserApiController _controller;
        private readonly IUserService _service;

        [Fact]
        public void Insert_CorrectRegistrationInfo()
        {
            UserInsertRequestModel correctRegistrationInfo = new UserInsertRequestModel()
            {
                Email = "xUnitTester@gmail.com",
                Password = "Password1!",
                PasswordConfirm = "Password1!"
            };
            var result = _controller.Insert(correctRegistrationInfo);
            Console.WriteLine(result);

            Console.WriteLine(Assert.IsType<ItemResponse<int>>(result));
        }

        /*
        UserApiController _controller;
        IUserService _service;

        public RegisterControllerTest()
        {
            _service = new UserServiceFake();
            _controller = new UserApiController(_service);
        }

        public UserInsertRequestModel registrationInfo = new UserInsertRequestModel();

        [Fact]
        public void Post_CorrectRegistration_ReturnOkResult()
        {
            var okResult = _controller.Insert();

            Assert.IsType<OkObjectResult>(okResult.Result);
        }

        [Fact]
        public void UserRegisterTests()
        {
            registrationInfo.Email = "xunitTest@gmail.com";
            registrationInfo.Password = "Password1!";
            registrationInfo.PasswordConfirm = "Password1!";

            IUserService.Insert(UserInsertRequestModel registrationInfo);

            Assert.Equal(HttpStatusCode.OK, result.StatusCode);
        }
        */
    }
}