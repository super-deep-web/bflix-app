// import NextAuth from "next-auth/next";
// import Credentials from "next-auth/providers/credentials";

// import prismadb from "@/lib/prismadb";

// export default NextAuth({
//     providers: [
//         Credentials({
//             id: "credentials",
//             name: "credentials",
//             credentials: {
//                 email: {
//                     label: "Email",
//                     type: "text",
//                 }
//             },
//             password: {
//                 label: "Password",
//                 type: "password",
//             }
//         },
//         async authorize(credentials) {
//             if(!credentials?.email || !credentials?.password) {
//                 throw new Error("Email and password required");
//             }

//             const user = await prismadb.user.findUnique({
//                 where: {
//                     email: credentials.email
//                 }
//             })
//         }
//         )
//     ]
// })