import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [showPersonalData, setShowPersonalData] = useState(false);

    const resetPersonalData = () => {
        setShowPersonalData(false);
    };

    return (
        <AppContext.Provider value={{ showPersonalData, setShowPersonalData, resetPersonalData }}>
            {children}
        </AppContext.Provider>
    );
};
