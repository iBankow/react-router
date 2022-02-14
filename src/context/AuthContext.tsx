import React, { createContext, useContext, useEffect } from "react";
import { fakeAuthProvider } from "./auth";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem("STORAGE_USER");
      const storageToken = localStorage.getItem("TOKEN_API");

      if (storageToken && storageUser) {
        console.log("eae");
        setUser(JSON.parse(storageUser));
      } else if (!storageUser || !storageToken) {
        localStorage.clear();
        setUser(null);
      }
    }
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(async () => {
      setUser({ user: newUser });
      localStorage.setItem("STORAGE_USER", `{ "user": "user" }`);
      localStorage.setItem("TOKEN_API", "token");
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
