using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using workoutApp.Models.User;

namespace workoutApp.Models.LoginRegister
{
    public class UserLoginModel : UserModel
    {
        public string Password { get; set; }
    }
}
