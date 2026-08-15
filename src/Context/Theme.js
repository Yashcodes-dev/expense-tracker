import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider


export function ThemeProvider({ children }) {

    const[theme, setTheme] = useState('light');
}

export default function useTheme(){
    return useContext(ThemeContext)
}