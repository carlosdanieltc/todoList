import { useState } from "react";

//Este método está completamente desarrollado por el equipo de react en el siguiente enlace: https://react-hook-form.com/get-started
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange, 
        onResetForm
    }
}
