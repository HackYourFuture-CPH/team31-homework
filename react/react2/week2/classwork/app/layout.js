import { TodoProvider } from "./components/toodContext";
import { ThemeProvider } from "./components/themecontext";
import { AppThemeProvider } from "./components/localizationcontext";
import { CounterProvider } from "./components/counterContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>
          <ThemeProvider>
            <AppThemeProvider>
              <CounterProvider>{children}</CounterProvider>
            </AppThemeProvider>
          </ThemeProvider>
        </TodoProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Classwork React2 Week2",
};
