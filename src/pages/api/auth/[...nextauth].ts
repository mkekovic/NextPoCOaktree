import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  secret:process.env.NEXTAUTH_SECRET,
  providers: [
    // AzureADProvider({
    //     clientId: 'daccbcbd-9465-4cbd-a810-439451287747',
    //     clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
    //     tenantId: '997bb24e-f4ba-452f-8f21-13714e0a657b',
    //   }),
    
    GithubProvider({
        clientId: "669d81a1ebdb67a6e8c5", //process.env.GITHUB_ID,
        clientSecret: "8380945a3dbdaf9c2fada9dafbc4d4ea002bb8a9" //process.env.GITHUB_SECRET,
      }),
  ],
  jwt: {
    // A secret to use for key generation. Defaults to the top-level `secret`.
   secret: process.env.NEXTAUTH_SECRET,
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behavior.
    // async encode({ secret, token, maxAge }) {},
    // async decode({ secret, token }) {},
  }
}
export default NextAuth(authOptions)
