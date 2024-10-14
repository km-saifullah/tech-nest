"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is authenticated based on the token stored in cookies
  useEffect(() => {
    const token = Cookies.get("accessToken"); // Get the token from cookies
    if (token) {
      // Fetch user data or validate the token if necessary
      setUser({ token }); // Here, you can validate the token if needed
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  // Log out functionality (optional)
  const logout = () => {
    Cookies.remove("accessToken"); // Remove token from cookies
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
