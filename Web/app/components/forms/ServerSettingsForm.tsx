"use client"
import Input from "../Input";
import { TServerSettingFormProps, TServerSettings } from "../types";
import { useForm } from 'react-hook-form';

const ServerSettingsForm = (props: TServerSettingFormProps) => {
    const { settings } = props;
    const JSONSettings: TServerSettings = JSON.parse(settings);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TServerSettings>({
        defaultValues: JSONSettings
    });

    return(
        <form>
            {Object.entries(JSONSettings).map(([key, value]) => (
                <Input type="input" label={key} placeholder={key} {...register(key as keyof TServerSettings, { required: true, minLength: 2, maxLength: 20})}/>
            ))}
        </form>
    )
}

export default ServerSettingsForm