import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: 'd35f19b1550dae0b79e7',
      clientSecret: '0bfbd327c9b434cda5d0c18bdd291b8092b81823',
    }),
    GoogleProvider({
      clientId: '406401004053-fssikkriu9e2egio5oaregavs2je7o8h.apps.googleusercontent.com',
      clientSecret: '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'
    })
    
  ],
})