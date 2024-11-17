import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {





    const authinfo = {

    }
    return (
        <AuthContext.Provider>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;