import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface LanguageState {
  currentLanguage: string;
}

const getInitialLanguage = (): string => {
  return Cookies.get("language") || "en";
};

const initialState: LanguageState = {
  currentLanguage: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
      Cookies.set("language", action.payload, { expires: 30 });
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
