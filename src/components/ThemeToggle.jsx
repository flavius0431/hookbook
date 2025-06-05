import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme (Current: {theme})</button>
    </div>
  );
}
