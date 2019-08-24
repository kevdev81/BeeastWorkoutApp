using System;
using System.ComponentModel.DataAnnotations;

namespace workoutApp.Models.StrengthProfile
{
    public class StrengthProfileInsertRequest
    {
        [Required, Range(1, Int32.MaxValue)]
        public int UserId { get; set; }

        [Required, Range(1, Int32.MaxValue)]
        public decimal Weight { get; set; }

        [Required, Range(1, Int32.MaxValue)]
        public int BenchMax { get; set; }

        [Required, Range(1, Int32.MaxValue)]
        public int DeadliftMax { get; set; }

        [Required, Range(1, Int32.MaxValue)]
        public int SquatMax { get; set; }

        [Required, Range(1, Int32.MaxValue)]
        public int ShoulderPressMax { get; set; }
    }
}