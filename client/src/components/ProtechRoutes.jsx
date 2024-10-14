"use client";
import { useAuth } from "@/context/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth() || {};
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // If the user is not authenticated, redirect to the home page
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the children if the user is authenticated
  return user ? children : null;
};

export default ProtectedRoute;
