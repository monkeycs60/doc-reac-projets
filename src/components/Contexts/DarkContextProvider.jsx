import React, { useState, createContext } from "react";

export const DarkModContext = createContext();

const DarkContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <DarkModContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
        </DarkModContext.Provider>
    );
    };

export default DarkContextProvider;