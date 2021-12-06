import axios from "axios";
import { makeRequest } from "./axios.helper";

const rootApi = process.env.REACT_APP_ROOT_API;

export const userLogin = async (obj) => {
  const axiosObj = {
    method: "post",
    url: rootApi + "/login",
    data: obj,
  };

  const data = await makeRequest(axiosObj);
  return data;
};
