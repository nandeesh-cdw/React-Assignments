import React, { createContext, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean | void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});
const number =10 
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

export const useAuth = () => React.useContext(AuthContext);