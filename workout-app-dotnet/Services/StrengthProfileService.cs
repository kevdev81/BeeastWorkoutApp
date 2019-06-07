using System;
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

        public StrengthProfile GetByUserId(int UserId)
        {
            StrengthProfile strengthProfile = new StrengthProfile();
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.StrengthProfile_SelectByUserId", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserId", UserId);

                con.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    strengthProfile.Id = (int)reader["Id"];
                    strengthProfile.UserId = UserId;
                    strengthProfile.Weight = (double)reader["Weight"];
                    strengthProfile.BenchMax = (int)reader["BenchMax"];
                    strengthProfile.DeadliftMax = (int)reader["DeadliftMax"];
                    strengthProfile.SquatMax = (int)reader["SquatMax"];
                    strengthProfile.ShoulderPressMax = (int)reader["ShoulderPressMax"];
                    strengthProfile.DateCreated = Convert.ToDateTime(reader["DateCreated"]);
                    strengthProfile.DateModified = Convert.ToDateTime(reader["DateModified"]);
                }
                con.Close();
            }
            return strengthProfile;
        }

        //public void Update(int UserId)
        //{
        //    using (SqlConnection con = new SqlConnection(connString))
        //    {
        //        SqlCommand cmd = new SqlCommand("dbo.User_UpdateHasStrengthProfile", con);
        //        cmd.CommandType = CommandType.StoredProcedure;

        //        cmd.Parameters.AddWithValue("@Id", UserId);

        //        con.Open();
        //        cmd.ExecuteNonQuery();
        //        con.Close();
        //    }
        //}
    }
}