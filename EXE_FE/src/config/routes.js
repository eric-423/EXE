const routes = {
  public: {
    home: "/",
    login: "/login",
    register: "/register",
    verifyCode: "/verify-code",
    forgotPassword: "/forgot-password",
    setPassword: "/set-password",
    aboutUs: "/about-us",
    blog: "/blogs",
    blogContent: "/blogs/:blogId",
    stores: "/stores",
    notFound: "/404",
    hiring: "/hiring",
    best: "/best",
  },
  api: {
    loginGoogle: "/api/auth/callback/google/redirect",
  },
    public: {
        home: "/",
        login: "/login",
        loginEmployee: "/loginemployee",
        loginOTP: "/loginotp",
        loginPassword: "/loginpassword",
        register: "/register",
        verifyCode: "/verify-code",
        forgotPassword: "/forgot-password",
        setPassword: "/set-password",
        aboutUs: "/about-us",
        blog: "/blogs",
        blogContent: "/blogs/:blogId",
        stores: "/stores",
        notFound: "/404",
        hiring: "/hiring",
    },
    api: {
        loginGoogle: "/api/auth/callback/google/redirect",
    },
};

export default routes;
