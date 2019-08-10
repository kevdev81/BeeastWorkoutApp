import axios from "axios";

///Redis
// export const getUserById = () => {
//   const config = {
//     method: "GET",
//     url: `https://localhost:44350/api/user`,
//     crossdomain: true,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("currentUser")
//     }
//   };
//   return axios(config)
//     .then(data => {
//       return data.data.item;
//     })
//     .catch(error => console.log(error));
// };

// export const getStrengthProfileByUserId = () => {
//   const config = {
//     method: "GET",
//     url: `https://localhost:44350/api/strengthProfile`,
//     crossdomain: true,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("currentUser")
//     }
//   };
//   return axios(config);
// };

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
