import axios from "axios";

export function handleLoginUser(loginEmail) {
  const config = {
    method: "GET",
    url: `https://localhost:44399/api/user/login/${loginEmail}`,
    crossdomain: true,
    headers: {
      "Conent-Type": "application/json"
    }
  };
  return axios(config)
    .then(data => {
      return data.data.item;
    })
    .catch(data => {
      return data;
    });
}
