"use client"

import { useForm } from "react-hook-form"
import { 
    TFiltersForm, 
    TFilterFormProps } from "../types"
import { useRouter } from 'next/navigation'
import Input from "../Input"

const FiltersForm = (params: TFilterFormProps) => {
    const {carNameSlug, liveryAuthor} = params;
    const {
        register,
        handleSubmit
    } = useForm<TFiltersForm> ({
        defaultValues: {
            carName: carNameSlug,
            author: liveryAuthor
        }
    });
    const router = useRouter();

    return (
        <form onSubmit={handleSubmit((data) => {
            router.push('/explore/' + data.carName + '/' + data.author);
        })}>
            <Input type="input" label="author" placeholder="author" {...register("author", { required: false, minLength: 2, maxLength: 20})}/>
            <Input type="input" label="car" placeholder="class" {...register("carName", { required: false, minLength: 2, maxLength: 20})}/>
            <input type="submit" />
        </form>
    )
}

export default FiltersForm