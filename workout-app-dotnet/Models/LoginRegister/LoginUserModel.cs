using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace workoutApp.Models.LoginRegister
{
    public class LoginUserModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool HasProfile { get; set; }
    }
}
