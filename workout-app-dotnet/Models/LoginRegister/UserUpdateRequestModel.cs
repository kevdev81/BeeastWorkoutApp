using System.ComponentModel.DataAnnotations;

namespace workoutApp.Models.LoginRegister
{
    public class UserUpdateRequestModel
    {
        [Required]
        public int Id { get; set; }

        [EmailAddress(ErrorMessage = "Email address is not in valid format.")]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public bool? IsConfirmed { get; set; }
    }
}