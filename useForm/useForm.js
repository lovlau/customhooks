import { useState } from "react";


export const useForm = (initialform={}) => {

    const [form, setform] = useState(initialform)

    const onchangeww=({target})=>{
        const {name, value}=target;
        setform({
            ...form,
            [name]:value
        });
    }
    
const onResetForm=()=>{
    setform(initialform);
}

    return{
        setform, ...setform, onchangeww, onResetForm
    }
}

