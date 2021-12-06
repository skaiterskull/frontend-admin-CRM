import { userLogin } from "../../apis/loginApi";
import { toast } from "react-toastify";
import {
  isPending,
  requestSuccess,
  getProfileSuccess,
  requestFailed,
  adminLoggedIn,
  adminLoggedOut,
} from "./adminUser.slice";

export const adminLogin = (data) => async (dispatch) => {
  dispatch(isPending());
  const result = await userLogin(data);
  console.log(result);
  if (result.status === "success") {
    window.localStorage.setItem("refreshJWT", result.refreshJWT);
    window.sessionStorage.setItem("accessJWT", result.accessJWT);
    //make user login true
    dispatch(adminLoggedIn());

    //dispatch fetch user api
  } else {
    toast.error(result.message);
    dispatch(requestFailed());
  }
};
