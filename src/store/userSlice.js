import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    usedCompanyCount: 0,
    companyLimit: 0,
    error: "",
  },
  reducers: {
    userAuth(state) {
      state.isAuth = true;
      console.log("Пользователь аутентифицирован");
    },
    userError(state, action) {
      state.error = action.payload;
      console.error("Ошибка пользователя:", action.payload);
    },
    userErrorRemove(state) {
      state.error = "";
      console.log("Ошибка пользователя удалена");
    },
    userLogout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("expire");
      state.isAuth = false;
      console.log("Пользователь вышел из системы");
    },
    userInfo(state, action) {
      state.usedCompanyCount = action.payload.usedCompanyCount;
      state.companyLimit = action.payload.companyLimit;
      console.log("Данные пользователя обновлены:", action.payload);
    },
  },
});

export const { userAuth, userError, userErrorRemove, userLogout, userInfo } =
  userSlice.actions;

export default userSlice.reducer;
