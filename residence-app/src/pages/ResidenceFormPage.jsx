import React from "react";
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';

const ResidenceForm = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>CEP:</label>
            <input
                name="cep"
                ref={register({
                    required: "Required",
                    pattern: {
                        value: /^([\d]{8})$/i,
                        message: "invalid cep number"
                    }
                })}
            />
            {errors.cep && errors.cep.message}

            <label>Number:</label>
            <input
                name="number"
                ref={register({
                    validate: value => value >= 0 || "Invalid number!"
                })}
            />
            {errors.number && errors.number.message}

            <label>Latitude:</label>
            <input
                name="latitude"
                ref={register({
                    required: "Required",
                    pattern: {
                        value: /-?\d+\.?\d+/,
                        message: "invalid latitude number"
                    }
                })}
            />
            {errors.latitude && errors.latitude.message}

            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
};

export default ResidenceForm;