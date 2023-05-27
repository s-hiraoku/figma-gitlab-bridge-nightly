"use client";
import "@styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "@stores/context/AppContext";
import { blue, red } from "@mui/material/colors";
import { AppContent } from "./components";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(isDarkMode
        ? {}
        : {
            primary: red,
            secondary: blue,
          }),
    },
  });
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppProvider>
            <AppContent>{children}</AppContent>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
