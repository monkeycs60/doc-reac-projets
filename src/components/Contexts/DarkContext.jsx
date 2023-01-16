import React, { useState, createContext } from "react";

export const DarkModContext = createContext();

const DarkContext = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <DarkModContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
        </DarkModContext.Provider>
    );
    };

export default DarkContext;