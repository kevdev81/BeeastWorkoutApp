import axios from "axios";

///Redis
// export function handleLoginUser(formData) {
//   const config = {
//     method: "POST",
//     data: JSON.stringify(formData),
//     url: `https://localhost:44350/api/user/loginRedis`,
//     crossdomain: true,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//   return axios(config)
//     .then(res => res.data)
//     .catch(error => {
//       console.log(error);
//     });
// }

export function handleLoginUser(formData) {
  const config = {
    method: "POST",
    data: JSON.stringify(formData),
    url: `https://localhost:44350/api/user/login`,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}
