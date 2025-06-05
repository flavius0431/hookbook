# HookBook

A _React Hooks Demo Dashboard_ showcasing:

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

---

## Features

- _Clock_: Displays current time updated every second.
- _Form_: Collects user's name and email with real-time validation.
- _Theme Toggle_: Switch between Light and Dark mode.
- _Custom Hooks_: useForm for form state management.
- _Responsive Design_: Basic styles with smooth theme transitions.

---

## Installation

# Clone the repository

git clone https://github.com/yourusername/hookbook.git
cd hookbook

# Install dependencies

npm install

# Start development server

npm run dev

Make sure you have **Node.js** and **npm** installed on your machine.

---

## Available Scripts

- npm run dev – Start the development server.
- npm run build – Create an optimized production build.

---

## Project Structure

hookbook/
├── components/
│ ├── Clock.jsx
│ ├── Form.jsx
│ └── ThemeToggle.jsx
├── hooks/
│ └── useForm.js
├── ThemeContext.jsx
├── App.jsx
├── main.jsx
├── App.css
├── index.css
└── package.json

---

## Component Overview

### 1. Clock.jsx

Displays a live clock that updates every second.

### 2. Form.jsx

Form with validation for name and email. Uses a custom hook useForm.

- _Validation Rules_:

  - Name is required.
  - Email must be a valid email address.

### 3. ThemeToggle.jsx

Button to toggle between Light and Dark themes. Uses context ThemeContext.

### 4. useForm.js

Custom hook for form state management:

const { values, handleChange, reset } = useForm({ name: "", email: "" });

### 5. ThemeContext.jsx

Provides global theme state (light or dark) across the app via Context API.

export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState("light");

const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

useEffect(() => {
document.body.className = theme;
}, [theme]);

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

Use useTheme hook to access the theme and toggle function.

---

## Customization

- _Styling_: Modify App.css and index.css for global styles.
- _Form Fields_: Add more fields in Form.jsx and update validation accordingly.
- _Theme Colors_: Customize theme variables in index.css:

  .light {
  --bg-color: #ffffff;
  --text-color: #222222;
  }
  .dark {
  --bg-color: #1e1e1e;
  --text-color: #ffffff;
  }
