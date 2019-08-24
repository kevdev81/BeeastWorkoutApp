using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using workoutApp.Controllers.Temp;
using workoutApp.Interfaces;
using workoutApp.Interfaces.Redis;
using workoutApp.Models.LoginRegister;
using workoutApp.Models.Responses;
using workoutApp.Models.User;

namespace workoutApp.Controllers.LoginRegister
{
    [Route("api/user")]
    public class UserApiController : BaseApiController
    {
        private IRedisService _redisService;
        private readonly IUserService _userService;

        public UserApiController(
            IUserService userService,
            IRedisService redisService,
            ILogger<UserApiController> logger
            ) : base(logger)
        {
            _userService = userService;
            _redisService = redisService;
        }

        //[HttpPost("tester")]
        //public ActionResult<ItemResponse<int>> IdTest()
        //{
        //    ItemResponse<int> response = null;
        //    ActionResult result = null;

        //    string userIdCookie = Request.Cookies["Token"];

        //    try
        //    {
        //        var userId = int.Parse(_redisService.Get(userIdCookie));

        //        if(userId > 0)
        //        {
        //            response = new ItemResponse<int>();
        //            response.Item = userId;
        //            result = Ok200(response);
        //        }
        //        else
        //        {
        //            result = NotFound404(new ErrorResponse("User information did not match."));
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Logger.LogError(ex.ToString());
        //        result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
        //    }
        //    return result;
        //}

        [HttpPost("loginRedis")]
        public ActionResult<ItemResponse<UserModel>> LoginRedis(UserLoginRequestModel req)
        {
            ItemResponse<UserModel> response = null;
            ActionResult result = null;

            try
            {
                UserModel currentUser = _userService.Login(req);

                if (currentUser.Id > 0)
                {
                    string token = _redisService.SetToken(currentUser.Id);

                    response = new ItemResponse<UserModel>();
                    response.Token = token;
                    response.Item = currentUser;
                    result = Ok200(response);
                }
                else
                {
                    result = NotFound404(new ErrorResponse("User information did not match."));
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }

        [HttpPost("login")]
        public ActionResult<ItemResponse<UserModel>> Login(UserLoginRequestModel req)
        {
            ItemResponse<UserModel> response = null;
            ActionResult result = null;

            try
            {
                UserModel currentUser = _userService.Login(req);

                if (currentUser.Id > 0)
                {
                    response = new ItemResponse<UserModel>();
                    response.Item = currentUser;
                    result = Ok200(response);
                }
                else
                {
                    result = NotFound404(new ErrorResponse("User information did not match."));
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public ActionResult<ItemResponse<int>> Insert(UserInsertRequestModel model)
        {
            ItemResponse<int> response = null;
            ActionResult result = null;

            try
            {
                int id = _userService.Register(model);

                if (id > 0)
                {
                    response = new ItemResponse<int>();
                    response.Item = id;

                    result = Created201(response);
                }
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("duplicate key"))
                {
                    result = StatusCode(500, new ErrorResponse("The email you are trying to register with is already in use."));
                }
                else
                {
                    Logger.LogError(ex.ToString());
                    result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
                }
            }
            return result;
        }
    }
}