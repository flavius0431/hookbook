# HookBook

A **React Hooks Demo Dashboard** showcasing:

- A live clock
- A user form with validation
- A light/dark theme toggle using React Context

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Component Overview](#component-overview)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Clock**: Displays current time updated every second.
- **Form**: Collects user's name and email with real-time validation.
- **Theme Toggle**: Switch between Light and Dark mode.
- **Custom Hooks**: `useForm` for form state management.
- **Responsive Design**: Basic styles with smooth theme transitions.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hookbook.git
cd hookbook

# Install dependencies
npm install

# Start development server
npm run dev
```

> Make sure you have **Node.js** and **npm** installed on your machine.

---

## Available Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Create an optimized production build.

---

## Project Structure

```
hookbook/
├── components/
│   ├── Clock.jsx
│   ├── Form.jsx
│   └── ThemeToggle.jsx
├── hooks/
│   └── useForm.js
├── ThemeContext.jsx
├── App.jsx
├── main.jsx
├── App.css
├── index.css
└── package.json
```

---

## Component Overview

### 1. `Clock.jsx`

Displays a live clock that updates every second.

### 2. `Form.jsx`

Form with validation for `name` and `email`. Uses a custom hook `useForm`.

- **Validation Rules**:

  - Name is required.
  - Email must be a valid email address.

### 3. `ThemeToggle.jsx`

Button to toggle between Light and Dark themes. Uses context `ThemeContext`.

### 4. `useForm.js`

Custom hook for form state management:

```jsx
const { values, handleChange, reset } = useForm({ name: "", email: "" });
```

### 5. `ThemeContext.jsx`

Provides global theme state (`light` or `dark`) across the app via Context API.

```jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

Use `useTheme` hook to access the theme and toggle function.

---

## Customization

- **Styling**: Modify `App.css` and `index.css` for global styles.
- **Form Fields**: Add more fields in `Form.jsx` and update validation accordingly.
- **Theme Colors**: Customize theme variables in `index.css`:

  ```css
  .light {
    --bg-color: #ffffff;
    --text-color: #222222;
  }
  .dark {
    --bg-color: #1e1e1e;
    --text-color: #ffffff;
  }
  ```

---

## License

This project is open-sourced under the MIT License.
