import Clock from "./components/Clock";
import Form from "./components/Form";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <h1>React Hooks Demo Dashboard</h1>
        <ThemeToggle />
        <Clock />
        <Form />
      </div>
    </ThemeProvider>
  );
}
