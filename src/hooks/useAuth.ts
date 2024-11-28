import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
    signIn: () => signIn("google", { callbackUrl: "/" }),
    signOut: () => signOut({ callbackUrl: "/" }),
  };
};
