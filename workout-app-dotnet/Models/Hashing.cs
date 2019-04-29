using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace workoutApp.Models
{
    public class Hashing
    {
        public static string HashedPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
        public static bool ValidatePassword(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    }
}
