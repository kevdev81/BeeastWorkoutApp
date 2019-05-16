import axios from "axios";

export const handlePostRegisterUser = formData => {
  const config = {
    method: "POST",
    data: JSON.stringify(formData),
    url: `https://localhost:44350/api/user/register`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(res => res.data.data)
    .catch(error => {
      console.log(error);
    });
};
