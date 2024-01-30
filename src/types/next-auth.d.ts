import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface DefaultUser {
    role?: "ADMIN" | "USER";
    avatar?: string;
  }
  interface Session {
    user?: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "ADMIN" | "USER" | null;
    };
    expires: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role?: "ADMIN" | "USER" | null;
    id?: string | null;
  }
}
