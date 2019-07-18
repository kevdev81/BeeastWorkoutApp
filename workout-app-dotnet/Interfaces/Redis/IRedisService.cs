using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using workoutApp.Models.Redis;

namespace workoutApp.Interfaces.Redis
{
    public interface IRedisService
    {
        string Get(string Key);

        string SetToken(int value);

        int RedisAuth(string authHeader);
    }
}
