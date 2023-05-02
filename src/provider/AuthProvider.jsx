import React, { createContext, useState } from 'react';
export const AutContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)



    const authInfo ={
        user,
    }
    return (
        <div>
            <AutContext.Provider value={authInfo}>
                {children}
            </AutContext.Provider>
        </div>
    );
};

export default AuthProvider;