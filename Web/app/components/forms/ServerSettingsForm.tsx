"use client"

import { TServerSettingsForm } from "../types";
import { useForm } from 'react-hook-form';

const ServerSettingsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TServerSettingsForm>({
        defaultValues: {

        }
    });
}