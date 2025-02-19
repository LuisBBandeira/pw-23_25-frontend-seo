import { useState , createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext

export const ThemeProvider = ({children}: {children: React.Reactmode}) => {
    const [theme , setTheme] = useState("light"),
    return (
        <ThemeProvider.Provider value = {{theme : setTheme}}>
            {children}
        </ThemeProvider.Provider>
    )
}