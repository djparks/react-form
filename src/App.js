import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

/*
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
*/

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
});


export default function App() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <label htmlFor="firstName">First Name: </label>
                <input id="firstName" type="text" placeholder="First Name"  {...register("firstName")} />
                <p>{errors.firstName?.message}</p>
            </section>

            <section>
                <label htmlFor="lastName">Last Name: </label>
                <input id="lastName" type="text" placeholder="Last Name"  {...register("lastName")} />
                <p>{errors.lastName?.message}</p>
            </section>

            <section>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" placeholder="Email" {...register("email")} />
                <p>{errors.email?.message}</p>
            </section>

            <section>
                <label htmlFor="phone">Phone: </label>
                <input type="tel" id="phone"
                       placeholder="Phone number" {...register("phone", {required: true, minLength: 6, maxLength: 12})} />
                <p>{errors.phone?.message}</p>
            </section>


            <section>
                <input type="submit" />
            </section>
        </form>
    );
}

