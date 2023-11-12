"use client"

import { useForm } from "react-hook-form"
import { TFiltersForm } from "../types"
import { useRouter } from 'next/navigation'
import Input from "../Input"

const FiltersForm = () => {
    const {
        register,
        watch,
        handleSubmit
    } = useForm<TFiltersForm> ({
        defaultValues: {
            carName: 'gt3',
            author: undefined
        }
    });
    const router = useRouter();

    return (
        <form onSubmit={handleSubmit((data) => {
            router.push('/explore/' + watch("author")?.toString() + '/' + watch("author")?.toString());
        })}>
            <Input type="input" label="author" placeholder="author" {...register("author", { required: false, minLength: 2, maxLength: 20})}/>
            <Input type="input" label="car" placeholder="class" {...register("carName", { required: false, minLength: 2, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default FiltersForm