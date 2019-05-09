import axios from "axios";

export function handleLoginUser(formData) {
  const config = {
    method: "POST",
    data: JSON.stringify(formData),
    url: `https://localhost:44350/api/user/login`,
    crossdomain: true,
    headers: {
      "Conent-Type": "application/json"
    }
  };
  return axios(config)
    .then(res => console.log(res))
    .catch(error => {
      console.log(error);
    });
}

//localStore.setItem('token', response.data.token);