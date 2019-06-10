import axios from "axios";

export function handleInsertStrengthProfile(formData) {
  const config = {
    method: "POST",
    data: JSON.stringify(formData),
    url: `https://localhost:44350/api/strengthProfile`,
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
