import { createContext, useContext, useState } from "react";

const ResponseContext = createContext();
export const ResponseProvider = ({children}) => {
    const [response, setReponse] = useState('')
    return (
        <ResponseContext.Provider value={{response, setReponse}}>
        {children}
      </ResponseContext.Provider>
    )
}
