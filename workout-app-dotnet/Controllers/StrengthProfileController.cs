using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using workoutApp.Controllers.Temp;
using workoutApp.Interfaces;
using workoutApp.Models.Responses;
using workoutApp.Models.StrengthProfile;
using workoutApp.Models.StrengthProfile.StrengthProfile;

namespace workoutApp.Controllers
{
    [Route("api/strengthProfile")]
    public class StrengthProfileController : BaseApiController
    {
        private readonly IStrengthProfileService _strengthProfileService;

        public StrengthProfileController(IStrengthProfileService strengthProfileService,
            ILogger<StrengthProfileController> logger
            ) : base(logger)
        {
            _strengthProfileService = strengthProfileService;
        }

        [HttpPost]
        public ActionResult<ItemResponse<int>> Insert(StrengthProfileInsertRequest req)
        {
            ItemResponse<int> response = null;
            ActionResult result = null;

            try
            {
                int id = _strengthProfileService.Insert(req);

                if (id > 0)
                {
                    response = new ItemResponse<int>();
                    response.Item = id;

                    result = Created201(response);
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }

        [HttpGet("{userId:int}")]
        public ActionResult<ItemResponse<StrengthProfile>> GetByUserId(int userId)
        {
            ItemResponse<StrengthProfile> response = null;
            ActionResult result = null;

            try
            {
                StrengthProfile strengthProfile = _strengthProfileService.GetByUserId(userId);

                if (strengthProfile.Id > 0)
                {
                    response = new ItemResponse<StrengthProfile>();
                    response.Item = strengthProfile;
                    result = Ok200(response);
                }
                else
                {
                    result = NotFound404(new ErrorResponse("User information not found."));
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }
    }
}