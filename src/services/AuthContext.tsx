import React, { createContext, useState } from "react";

// Create the AuthContext
interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean | void; // Specify return type
  logout: () => void;
}

// Create the AuthContext
const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});
const number =10 
// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username:string, password:string): boolean => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn , login , logout}}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the useAuth hook
export const useAuth = () => React.useContext(AuthContext);