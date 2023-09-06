"use client"

import { useForm } from 'react-hook-form';
import { TNewUserForm } from '../types';
import { createUser } from '@/app/libs/prisma/user/functions';
import { useSession } from "next-auth/react"
import Input from '../Input';

const NewUserForm = () => {
    
    const { data: session } = useSession();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<TNewUserForm>({
        defaultValues: {
            username: ''
        }
    });

    return (
        <form onSubmit={handleSubmit(async (data) => {
            const newUser = await createUser(JSON.stringify(session?.user?.id), data.username);
            if(newUser) {
                return console.log("OK!");
            }

            if(!newUser) {
                return console.log("NO!");
            }
        })}>
            <Input type="input" label="username" placeholder="username" {...register("username", { required: true, minLength: 2, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default NewUserForm