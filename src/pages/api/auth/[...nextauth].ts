import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
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
}
export default NextAuth(authOptions)