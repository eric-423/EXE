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
        menu: "/menu",
        best: "/best",
        paymentSuccess: "/payment-success",
    },
    api: {
        loginGoogle: "/api/auth/callback/google/redirect",
    },
};

export default routes;
