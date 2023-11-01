"use client"

import { useForm } from 'react-hook-form';
import { useSession } from "next-auth/react"
import { cookies } from 'next/headers'
import { TUserSettingsForm } from '../types';
import Input from '../Input';
import { updateUserSteamID } from '@/app/libs/prisma/user/functions';

const UserSettingsForm = (props: TUserSettingsForm) => {

    const { name, steamid, id } = props; 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<TUserSettingsForm>({
        defaultValues: {
            id: id,
            currentName: name,
            name: name,
            steamid: steamid,
        }
    });


    return (
        <form 
            onSubmit={handleSubmit(async (data) => {
                const updateSteamID = await fetch('/api/updateSteamID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const updateName = await fetch('/api/updateUsername', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });


            }
        )}>
            <div className='flex flex-col'>
                <Input type="input" label="Username assigned to this account" placeholder={name} {...register("name", { required: true, minLength: 2, maxLength: 20})}/>
                {Number(steamid) == 0 && 
                    <Input type="input" label="Steamid" placeholder="Add your steamid here" {...register("steamid", { required: true, minLength: 2, maxLength: 20})}/>
                }

                {Number(steamid) != 0 && 
                    <Input type="input" label="Steamid" placeholder={steamid.toString()} {...register("steamid", { required: true, minLength: 2, maxLength: 20})}/>
                }

                <input type="submit" />
            </div>
        </form>
    )
}

export default UserSettingsForm