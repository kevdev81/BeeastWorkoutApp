using System;

namespace workoutApp.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public int UserRoledId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsConfirmed { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}