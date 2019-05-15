using System.ComponentModel.DataAnnotations;

namespace workoutApp.Models.StrengthProfile
{
    public class StrengthProfileInsertRequest
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public decimal Weight { get; set; }

        [Required]
        public int BenchMax { get; set; }

        [Required]
        public int DeadliftMax { get; set; }

        [Required]
        public int SquatMax { get; set; }

        [Required]
        public int ShoulderPressMax { get; set; }
    }
}