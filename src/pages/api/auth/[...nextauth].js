import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//配置next-auth，参考https://next-auth.js.org/configuration/options
export default NextAuth({
  // provider配置凭证登录
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userName: { label: "账号", type: "text" },
        password: { label: "密码", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const result = await axios.post(
            `${process.env.API_URL}/api/login`,
            {
              userName: credentials.userName,
              password: credentials.password,
            },
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                accept: "application/json",
              },
            }
          );

          if (result.data) {
            return result.data
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    // 设置会话的最大有效期为 2小时
    maxAge: 2 * 60 * 60, 
  },
  pages: {
    logIn: "auth/signin",
    error: "auth/signin",
  },
  // callbacks 在验证登录成功后，无论是在服务端或是在客户端都可以获取登录成功后的用户信息，分别定义两个函数： session 和 jwt，是先 jwt 执行， 然后才是 session。
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  events: {},
  debug: false,
});
