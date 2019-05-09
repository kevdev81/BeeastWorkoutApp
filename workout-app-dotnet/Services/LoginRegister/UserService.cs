using System.Data;
using System.Data.SqlClient;
using workoutApp.Interfaces.LoginRegister;
using workoutApp.Models.LoginRegister;
using workoutApp.Models.LoginRegister.LoginRequest;
using workoutApp.Services.Helpers;

namespace workoutApp.Services.LoginRegister

{
    public class UserService : IUserService
    {
        private static string connString = "Server=.\\SQLEXPRESS;Database=WorkoutApp;Trusted_Connection=True;";
        
        public int LoginCheck(LoginRequest req)
        {
            int id = 0;
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.User_SelectByEmail", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Email", req.Email);

                con.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                int currentUserId = 0;
                string hashedPassword = null;
                while (reader.Read())
                {
                    hashedPassword = (string)reader["Password"];
                    currentUserId = (int)reader["Id"];
                };

                bool validPassword = BCrypt.Net.BCrypt.Verify(req.Password, hashedPassword);

                if (validPassword)
                {
                    id = currentUserId;
                }
            }
            return id;
        }
        //public LoginRequest GetByEmail(string email)
        //{
        //    LoginRequest currentUser = new LoginRequest();

        //    using (SqlConnection con = new SqlConnection(connString))
        //    {
        //        SqlCommand cmd = new SqlCommand("dbo.User_SelectByEmail", con);
        //        cmd.CommandType = System.Data.CommandType.StoredProcedure;

        //        cmd.Parameters.AddWithValue("@Email", email);

        //        con.Open();
        //        SqlDataReader reader = cmd.ExecuteReader();

        //        while (reader.Read())
        //        {
        //            currentUser.Id = (int)reader["Id"];
        //        };
        //    }
        //    return currentUser;
        //}

        public int Insert(UserInsertRequestModel model)
        {
            int id = 0;
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(model.Password);
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