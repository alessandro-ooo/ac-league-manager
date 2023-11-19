import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers'

const setUsernameCookie = (cUsername: string) => {
    cookies().set('username', cUsername);
    return;
}

const getUsernameCookie = () => {
    const cUsername = cookies().get("username");

    return cUsername?.value;
}

export {
    setUsernameCookie,
    getUsernameCookie
}