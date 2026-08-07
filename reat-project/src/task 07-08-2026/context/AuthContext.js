import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        const user = localStorage.getItem("user");

        if (user) {
            setIsAuthenticated(true);
        }

    }, []);

    const login = () => {

        localStorage.setItem("user", "loggedIn");

        setIsAuthenticated(true);

    };

    const logout = () => {

        localStorage.removeItem("user");

        setIsAuthenticated(false);

    };

    return (

        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}

export function useAuth() {
    return useContext(AuthContext);
}