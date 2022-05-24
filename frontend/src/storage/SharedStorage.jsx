import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const store = useState({
    });

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}