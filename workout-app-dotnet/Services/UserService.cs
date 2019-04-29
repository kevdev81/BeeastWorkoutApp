using System;
using System.Data;
using System.Data.SqlClient;
using workoutApp.Interfaces;
using workoutApp.Models;

namespace workoutApp.Services

{
    public class UserService : IUserService
    {
        private static string connString = "Server=.\\SQLEXPRESS;Database=WorkoutApp;Trusted_Connection=True;";

        public int Insert(UserInsertRequestModel model)
        {
            int id = 0;
            string hashedPassword = Hashing.HashedPassword(model.Password);
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.User_Insert", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                SqlParameter outputParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                outputParam.Direction = ParameterDirection.Output;

                cmd.Parameters.AddWithValue("@Email", model.Email);
                cmd.Parameters.AddWithValue("@Password", hashedPassword);
                cmd.Parameters.AddWithValue("@IsConfirmed", model.IsConfirmed);

                con.Open();
                cmd.ExecuteNonQuery();
                id = int.Parse(outputParam.Value.ToString());
                con.Close();
            }
            return id;
        }

/*
        public Guid AddToken(int userId)
        {
            Guid generatedToken = Guid.NewGuid();
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.UserTokens_Insert", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@UserId", userId);
                cmd.Parameters.AddWithValue("@Token", generatedToken);
                cmd.Parameters.AddWithValue("@TokenTypeId", (int)TokenType.Register);
            }
        }
*/
    }
}