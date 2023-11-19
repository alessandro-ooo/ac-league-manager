import { TInputProps } from "./types";
import React, { LegacyRef } from "react";

const Input = React.forwardRef(({label, type, placeholder, ...rest} : TInputProps, ref: LegacyRef<HTMLInputElement>) => {

    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} ref={ref} {...rest}/> 
        </div>
    )
});

export default Input