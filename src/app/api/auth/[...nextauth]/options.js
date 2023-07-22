import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "*******"
                },
            },
            async authorize(credentials) {
                // Retrieve user data to verify credentials
                // Link: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: 1, name: "Rohit", password: "nextauth" }

                if (credentials.username === user.name && credentials.password === user.password) {
                    return user
                } else {
                    return null;
                }
            }
        })
    ],
    // pages: [],
}