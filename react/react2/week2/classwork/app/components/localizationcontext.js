"use client";

import { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { enUS, frFR, zhCN } from "@mui/material/locale";
import CssBaseline from "@mui/material/CssBaseline";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const AppThemeProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const localeMap = {
    en: enUS,
    fr: frFR,
    zh: zhCN,
  };

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: "#1976d2",
        },
      },
    },
    localeMap[language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </LanguageContext.Provider>
  );
};
