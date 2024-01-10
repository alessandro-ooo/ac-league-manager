"use client"
import {useForm } from "react-hook-form"
import { TRaceSettings } from "../types"
import Input from "../Input";
import { updateRace } from "@/app/libs/prisma/cfg/functions";

const EditRaceSettingsForm = (props: TRaceSettings) => {
    const {id, race, datetime, laps, track} = props;

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors}
    } = useForm<TRaceSettings>({
        defaultValues: {
            race: race,
            datetime: datetime,
            laps: laps,
            track: track,
        }
    });

    return (
        <form onSubmit={handleSubmit(async (data) => {
            data.id = id;
            const updateRace = await fetch('/api/updateRace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        })}>
            <Input key={0} type="input" label={"Race name"} placeholder={"Race name"} {...register("race", { required: false, maxLength: 20})}/>
            <Input key={1} type="datetime-local" label={"Date and time"} placeholder={""} {...register("datetime", { required: false, maxLength: 20})}/>
            <Input key={1} type="input" label={"Number of laps"} placeholder={""} {...register("laps", { required: false, maxLength: 20})}/>
            <Input key={1} type="input" label={"Track name"} placeholder={""} {...register("track", { required: false, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default EditRaceSettingsForm;