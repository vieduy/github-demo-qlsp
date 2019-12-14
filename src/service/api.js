import axios from "axios";
import { get, save } from "./localStorage";

const instance = axios.create({
  baseURL: "http://ttcong2301.southeastasia.cloudapp.azure.com:3000"
});
// ADD Token into Headers
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    console.log("hello from interceptors");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  err => err
);

const getNewTokenAndReattemptRequest = async (config, refToken) => {
  try {
    console.log(refToken);
    const getNewToken = await axios.post("127.0.0.1/users/token", {
      refreshtoken: refToken
    });
    console.log(getNewToken);
    const { token, refreshtoken } = getNewToken.data;
    save("accessToken", token);
    save("refreshToken", refreshtoken);
    config.headers["Authorization"] = `${token}`;
    return await axios(config);
  } catch (err) {
    window.location.reload();
    return Promise.reject(err);
  }
};

instance.interceptors.response.use(
  res => res,
  error => {
    const {
      config,
      config: { validateStatus },
      response: { status }
    } = error;
    if (validateStatus()) return error;
    if (status === 401) {
      console.log("hello from refresh");
      const refreshToken = get("refreshToken");
      if (refreshToken)
        return getNewTokenAndReattemptRequest(config, refreshToken);
      else {
        window.location.reload();
        return;
      }
    }
    if (status === 404) {
      return;
    }
    return error;
  }
);
export default instance;
