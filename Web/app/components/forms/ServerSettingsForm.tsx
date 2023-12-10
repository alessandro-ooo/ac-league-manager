"use client"
import { updateCFG } from "@/app/libs/prisma/cfg/functions";
import Input from "../Input";
import { TServerSettingFormProps, TServerSettings } from "../types";
import { FieldValues, useForm } from 'react-hook-form';

const ServerSettingsForm = (props: TServerSettingFormProps) => {
    const { settings } = props;

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors }
    } = useForm({

    });

    return(
        <form onSubmit={handleSubmit(async (data) => {
            if(getValues("ADMIN_PASSWORD") == "CHANGEME") {
                setError('ADMIN_PASSWORD', { type: "custom", message: 'YOU HAVE TO CHANGE YOUR ADMIN PASSWORD.' });
            }

            const updateData = await fetch('/api/updateServerCFG', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const dataUpdated = await updateData.json();

            if(dataUpdated.status == 200) {
                console.log("All good");
            }
        })}>

            {errors.ADMIN_PASSWORD && 
                <p>{errors.ADMIN_PASSWORD!.message as string}</p>
            }

            {settings.map((item, i) => {
                return (
                    <Input key={i} type="input" label={item.field} placeholder={item.field} {...register(item.field as keyof TServerSettings, { required: false, maxLength: 20, value: item.value})}/>
                )
            })}

            <input type="submit" />
        </form>
    )
}

export default ServerSettingsForm