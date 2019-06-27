//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Logging;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using workoutApp.Controllers.Temp;
//using workoutApp.Interfaces.Redis;
//using workoutApp.Models.Redis;
//using workoutApp.Models.Responses;

//namespace workoutApp.Controllers.Redis
//{
//    [Route("api/redis")]
//    public class RedisController : BaseApiController
//    {
//        private readonly IRedisService _redisService;

//        public RedisController(IRedisService redisService,
//            ILogger<RedisController> logger
//            ) : base(logger)
//        {
//            _redisService = redisService;
//        }

//        [HttpGet()]
//        [AllowAnonymous]
//        public ActionResult<ItemResponse<RedisKeyValue>> GetRedis()
//        {
//            ItemResponse<RedisKeyValue> response = null;
//            ActionResult result = null;

//            try
//            {
//                RedisKeyValue pair = _redisService.Get("foo");

//                response = new ItemResponse<RedisKeyValue>();
//                response.Item = pair;
//                result = Ok200(response);
//            }
//            catch (Exception ex)
//            {
//                Logger.LogError(ex.ToString());
//                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
//            }
//            return result;
//        }
//    }
//}
