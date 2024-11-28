import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod";
import bcryptjs from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-account'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            return true;
        },
        jwt({ token, user }) {
            if (user) {
                token.data = user
            }
            return token
        },
        session({ session, token, user }) {
            session.user = token.data as any;
            return session
        }
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null

                const { email, password } = parsedCredentials.data;

                const user = await user.findUnique({ where: { email: email.toLowerCase() } })

                if (!user) return null

                //Comparar las contraseñas
                if (!bcryptjs.compareSync(password, user.password)) return null


                //Regresar el usuario sin el password
                const { password: _, ...rest } = user;

                return rest
            }
        })
    ],
})

