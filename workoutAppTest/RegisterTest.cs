using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using workoutApp.Controllers;
using workoutApp.Interfaces;
using workoutApp.Models;
using workoutApp.Services;
using Xunit;

namespace workoutAppTest
{
    public class RegisterControllerTest
    {
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
    }
}