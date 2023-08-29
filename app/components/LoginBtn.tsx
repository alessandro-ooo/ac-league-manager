"use client"

import { signIn, signOut } from "next-auth/react"

const LoginBtn = () => {

    return (
        <button onClick={() => signIn("discord")}>Sign in</button>
    )
} 

const SignOutBtn = () => {

    return (
        <button onClick={() => signOut()}>Sign out</button>
    )
} 

export {LoginBtn, SignOutBtn}