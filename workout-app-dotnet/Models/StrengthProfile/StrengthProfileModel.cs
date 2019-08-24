using System;

namespace workoutApp.Models.StrengthProfile
{
    public class StrengthProfileModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal Weight { get; set; }
        public int BenchMax { get; set; }
        public int DeadliftMax { get; set; }
        public int SquatMax { get; set; }
        public int ShoulderPressMax { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}