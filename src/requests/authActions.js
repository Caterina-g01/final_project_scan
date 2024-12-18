import $api from "./apiClient";
import { userAuth, userError, userInfo } from "../store/userSlice";
import { toggleIsRequest } from "../store/publicationsSlice";

export const logIn = (login, password) => {
  return async (dispatch) => {
    dispatch(toggleIsRequest(true));
    try {
      const res = await $api.post("/account/login", { login, password });

      const { accessToken, expire } = res.data;

      console.log("Полученный токен:", accessToken);
      console.log("Срок действия токена:", expire);

      localStorage.setItem("token", accessToken);
      localStorage.setItem("expire", expire);

      dispatch(userAuth());
      dispatch(getInfo());
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Ошибка авторизации";
      dispatch(userError(errorMessage));
      console.error("Ошибка логина:", errorMessage);
    } finally {
      dispatch(toggleIsRequest(false));
    }
  };
};

export const getInfo = () => {
  return async (dispatch) => {
    try {
      const response = await $api.get("/account/info");
      const usedCompanyCount = response.data.eventFiltersInfo.usedCompanyCount;
      const companyLimit = response.data.eventFiltersInfo.companyLimit;
      dispatch(userInfo({ usedCompanyCount, companyLimit }));
    } catch (e) {
      const errorMessage =
        e.response?.data?.message ||
        "Ошибка получения информации о пользователе";
      console.error("Ошибка получения информации:", errorMessage);
      dispatch(userError(errorMessage));
    }
  };
};
