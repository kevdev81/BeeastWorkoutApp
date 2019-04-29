using System;
using System.ComponentModel.DataAnnotations;

namespace workoutApp.Models
{
    public class UserUpdateConfirmModel
    {
        [Required, Range(1, Int32.MaxValue)]
        public int Id { get; set; }
    }
}