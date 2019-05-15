using System.Data;
using System.Data.SqlClient;
using workoutApp.Interfaces;
using workoutApp.Models.StrengthProfile;
using workoutApp.Models.StrengthProfile.StrengthProfile;

namespace workoutApp.Services
{
    public class StrengthProfileService : IStrengthProfileService
    {
        private static string connString = "Server=.\\SQLEXPRESS;Database=WorkoutApp;Trusted_Connection=True;";

        public int Insert(StrengthProfileInsertRequest req)
        {
            int id = 0;
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.StrengthProfile_Insert", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                SqlParameter outputParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                outputParam.Direction = ParameterDirection.Output;

                cmd.Parameters.AddWithValue("@UserId", req.UserId);
                cmd.Parameters.AddWithValue("@Weight", req.Weight);
                cmd.Parameters.AddWithValue("@BenchMax", req.BenchMax);
                cmd.Parameters.AddWithValue("@DeadliftMax", req.DeadliftMax);
                cmd.Parameters.AddWithValue("@SquatMax", req.SquatMax);
                cmd.Parameters.AddWithValue("@ShoulderPressMax", req.ShoulderPressMax);

                con.Open();
                cmd.ExecuteNonQuery();
                id = int.Parse(outputParam.Value.ToString());
                con.Close();
            }
            return id;
        }
    }
}