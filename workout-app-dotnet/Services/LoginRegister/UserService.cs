using System.Data;
using System.Data.SqlClient;
using workoutApp.Interfaces.LoginRegister;
using workoutApp.Models.LoginRegister;
using workoutApp.Models.LoginRegister.LoginRequest;

namespace workoutApp.Services.LoginRegister

{
    public class UserService : IUserService
    {
        private static string connString = "Server=.\\SQLEXPRESS;Database=WorkoutApp;Trusted_Connection=True;";

        public CurrentUser LoginAuth(LoginRequest req)
        {
            CurrentUser currentUser = new CurrentUser();
            {
                LoginUserModel userInfo = Get(req.Email);
                bool validPassword = BCrypt.Net.BCrypt.Verify(req.Password, userInfo.Password);

                if (validPassword)
                {
                    currentUser.Id = userInfo.Id;
                    currentUser.FirstName = userInfo.FirstName;
                    currentUser.LastName = userInfo.LastName;
                    currentUser.Email = userInfo.Email;
                    currentUser.HasProfile = userInfo.HasProfile;
                }
            }
            return currentUser;
        }

        public LoginUserModel Get(string email)
        {
            LoginUserModel userInfo = new LoginUserModel();
            using (SqlConnection con = new SqlConnection(connString))
            {
                SqlCommand cmd = new SqlCommand("dbo.User_SelectByEmail", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Email", email);

                con.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    userInfo.Email = email;
                    userInfo.Id = (int)reader["Id"];
                    userInfo.FirstName = (string)reader["FirstName"];
                    userInfo.LastName = (string)reader["LastName"];
                    userInfo.Password = (string)reader["Password"];
                    userInfo.HasProfile = (bool)reader["HasProfile"];
                }
                con.Close();
            }
            return userInfo;
        }

        public int Register(UserInsertRequestModel model)
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
                cmd.Parameters.AddWithValue("@FirstName", model.FirstName);
                cmd.Parameters.AddWithValue("@LastName", model.LastName);
                cmd.Parameters.AddWithValue("@Password", hashedPassword);

                con.Open();
                cmd.ExecuteNonQuery();
                id = int.Parse(outputParam.Value.ToString());
                con.Close();
            }
            return id;
        }
    }
}