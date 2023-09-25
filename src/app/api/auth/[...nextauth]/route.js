import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/",
    },

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
