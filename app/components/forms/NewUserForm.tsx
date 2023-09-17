"use client"
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { TNewUserForm } from '../types';
import { useSession } from "next-auth/react"
import Input from '../Input';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
const NewUserForm = () => {
    
    const { data: session } = useSession();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<TNewUserForm>({
        defaultValues: {
            username: '',
            id: ''
        }
    });
    return (
        <form onSubmit={handleSubmit(async (data) => {
            data.id = session?.user?.id as string;

            const res = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // const result = await res.json();
            // if(result.status == 200) {
            //     redirect('/dashboard')
            // }
        
        })}>

            <Input type="input" label="username" placeholder="username" {...register("username", { required: true, minLength: 2, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default NewUserForm