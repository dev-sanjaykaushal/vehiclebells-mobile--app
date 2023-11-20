import BaseApi from "./baseApi";

const CreateAccount = async (data) => {
    console.log("register===",data);
    return await BaseApi({
        url: `/users/register`,
        method: "post",
        data: data
    })
}
const Login = async (data) => {
    return await BaseApi({
        url: `/users/mobile-login`,
        method: "post",
        data: data
    })
}

export {
    CreateAccount,
    Login
}


