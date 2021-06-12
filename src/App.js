import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    taxId: yup.string().required(),
    partnerId: yup.number().positive().integer().required(),
});

export default function App() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <label htmlFor="taxId">Tax Id: </label>
                <input id="taxId" {...register("taxId")} />
                <p>{errors.taxId?.message}</p>
            </section>

            <section>
                <label htmlFor="partnerId">Partner Id: </label>
                <input id="partnerId" {...register("partnerId")} />
                <p>{errors.partnerId?.message}</p>
            </section>
            <section>
                <input type="submit" />
            </section>
        </form>
    );
}
