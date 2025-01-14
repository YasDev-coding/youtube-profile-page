import { ThemeProvider } from "@/components/theme-provider";
import Profile from "./components/Profile";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <Profile />
      </main>
    </ThemeProvider>
  );
}

export default App;
