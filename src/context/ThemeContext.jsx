"use client"
import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();
const getFormLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}
const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext };