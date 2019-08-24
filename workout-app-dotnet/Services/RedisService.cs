using StackExchange.Redis;
using System;
using workoutApp.Interfaces.Redis;
using workoutApp.Models.Redis;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;

namespace workoutApp.Services.Redis
{
    public class RedisService : IRedisService
    {
        private ConnectionMultiplexer redisCon = ConnectionMultiplexer.Connect("localhost");

        //public string Get(string key)
        //{
        //    IDatabase db = redisCon.GetDatabase();

        //    RedisKeyValue pair = new RedisKeyValue();

        //    string val = db.StringGet(key);
        //    pair.Key = key;
        //    pair.Value = val;

        //    return pair.Value;
        //}

        public string SetToken(int value)
        {
            RedisKeyValue pair = new RedisKeyValue();

            Guid token = Guid.NewGuid();
            pair.Key = token.ToString();
            pair.Value = value.ToString();    
            
            IDatabase db = redisCon.GetDatabase();
            db.StringSet(pair.Key, pair.Value);

            return pair.Key;
        }

        public string Get(string cookie)
        {
            IDatabase db = redisCon.GetDatabase();

            RedisKeyValue pair = new RedisKeyValue();

            string val = db.StringGet(cookie);
            pair.Value = val;

            return pair.Value;
        }
    }
}