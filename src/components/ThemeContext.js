import { useEffect, useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();

export const AppThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    const handleToggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        if (theme === "light") {
            document.getElementById("__next").classList.remove("dark");
            document.getElementById("__next").classList.add("light");
        } else {
            document.getElementById("__next").classList.remove("light");
            document.getElementById("__next").classList.add("dark");
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext