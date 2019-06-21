import axios from "axios";

export const getUserById = id => {
  const config = {
    method: "GET",
    url: `https://localhost:44350/api/user/${id}`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(data => {
      return data.data.item;
    })
    .catch(error => console.log(error));
};

export const getStrengthProfileByUserId = userId => {
  const config = {
    method: "GET",
    url: `https://localhost:44350/api/strengthProfile/${userId}`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config);
};
