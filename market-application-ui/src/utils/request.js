import axios from "axios";

export default function request(url, options) {
  const headers = options.headers || {};
  return axios({
    method: options.method,
    url,
    headers: {
      ...headers,
    },
    data: options.body,
  });
}
