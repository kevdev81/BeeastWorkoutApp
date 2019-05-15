using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using workoutApp.Controllers.Temp;
using workoutApp.Interfaces.LoginRegister;
using workoutApp.Models.LoginRegister;
using workoutApp.Models.LoginRegister.LoginRequest;
using workoutApp.Models.Responses;

namespace workoutApp.Controllers.LoginRegister
{
    [Route("api/user")]
    public class UserApiController : BaseApiController
    {
        private readonly IUserService _userService;

        public UserApiController(IUserService userService,
            ILogger<UserApiController> logger
            ) : base(logger)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public ActionResult<ItemResponse<CurrentUser>> Login(LoginRequest req)
        {
            ItemResponse<CurrentUser> response = null;
            ActionResult result = null;

            try
            {
                CurrentUser currentUser = _userService.LoginCheck(req);

                if (currentUser.Id > 0)
                {
                    response = new ItemResponse<CurrentUser>();
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
                int id = _userService.Insert(model);

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