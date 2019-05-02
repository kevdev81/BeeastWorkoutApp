using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using workoutApp.Controllers.Temp;
using workoutApp.Interfaces;
using workoutApp.Models;
using workoutApp.Models.Responses;

namespace workoutApp.Controllers
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

//                    Guid token = _userService.AddToken(id);
//                    _emailService.ConfirmEmail(model.Email, token);
                    
                    result = Ok200(response);
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
/*
        [HttpPost("login")]
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
                    result = Ok201(response);
                }
                else
                {
                    result = NotFound404
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }
*/
    }
}
