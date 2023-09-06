"use client"

import { useForm } from 'react-hook-form';
import { TNewUserForm } from '../types';
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
            username: '',
            id: ''
        }
    });
    
    return (
        <form onSubmit={handleSubmit(async (data) => {
            data.id = JSON.stringify(session?.user?.id);

            const res = await fetch('/api/newuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            console.log(result.message);

        })}>

            <Input type="input" label="username" placeholder="username" {...register("username", { required: true, minLength: 2, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default NewUserForm