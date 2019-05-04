using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace workoutApp.Models
{
    public class BCrypt
    {
        public static string HashedPassword(string password)
        {
            return global::BCrypt.Net.BCrypt.HashPassword(password);
        }
        public static bool ValidatePassword(string password, string hashedPassword)
        {
            return global::BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    }
}
