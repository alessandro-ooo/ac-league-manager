"use client"
import { useForm } from "react-hook-form";
import { TRaceSettings } from "../types";
import Input from "../Input";

const RaceSettingsForm = () => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<TRaceSettings>({});

    return (
        <form onSubmit={handleSubmit(async (data) => {
            const createRace = await fetch('/api/createNewRace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const dataUpdated = await createRace.json();

            if(dataUpdated.status == 200) {
                console.log("race created");
            }
        })}>
            <Input key={0} type="input" label={"Race name"} placeholder={"Race name"} {...register("race", { required: false, maxLength: 20})}/>
            <Input key={1} type="datetime-local" label={"Date and time"} placeholder={""} {...register("datetime", { required: false, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default RaceSettingsForm