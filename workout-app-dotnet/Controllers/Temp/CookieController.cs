using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace workoutApp.Controllers.Temp
{
    public class CookieController : Controller
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public CookieController(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }

        public IActionResult Index()
        {
            //read cookie from IHttpContextAccessor
            string cookieValueFromContext = httpContextAccessor.HttpContext.Request.Cookies["key"];
            //read cookie from Request object
            string cookieValueFromReq = Request.Cookies["Key"];
            //set the key value in Cookie
            Set("kay", "Hello from cookie", 10);
            //Delete the cookie object
            Remove("Key");
            return View();
        }

        public string Get(string key)
        {
            return Request.Cookies[key];
        }

        public void Set(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();
            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddMilliseconds(10);
            Response.Cookies.Append(key, value, option);
        }

        public void Remove(string key)
        {
            Response.Cookies.Delete(key);
        }
    }
}