import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../prisma/db";
import { Customer } from "@prisma/client";
import { compareSync } from "bcrypt";
import auth from "../../../models/auth";

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			authorize: async (credentials, req) => {
				const user = await auth.login(credentials?.email as string);

				if (user) {
					const password = compareSync(credentials!.password, user.password);
					if (password) {
						return user;
					}
				}

				return null;
			},
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID!,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID!,
			clientSecret: process.env.TWITTER_CLIENT_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	secret: process.env.NEXTAUTH_SECRET,

	jwt: {
		maxAge: 30 * 24 * 60 * 60,
	},

	callbacks: {
		jwt: async ({ token, user, account, profile, isNewUser }) => {
			user && (token.user = user);
			return Promise.resolve(token);
		},
		session: async ({ session, user, token }) => {
			return Promise.resolve(session);
		},
	},
	pages: {
		signIn: "/auth/login",
	},
});
