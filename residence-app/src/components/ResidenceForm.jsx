import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Container, Grid, Snackbar, TextField } from '@material-ui/core';
import residenceService from '../services/residence';

const SubmitSchema = yup.object().shape({
    latitude: yup.number().required(),
    longitude: yup.number().required(),
    residents: yup.number().required().positive().integer(),
    cep: yup.number().positive().integer(),
    number: yup.number().positive().integer(),
});

export default function ResidenceForm() {
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(SubmitSchema) });
    const onSubmit = (data, e) => {
        residenceService.addResidence(data);
        e.target.reset();
        setOpen(true);
    };

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    spacing={3}
                    container
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <TextField
                            label="Latitude"
                            name="latitude"
                            inputRef={register}
                            error={!!errors.latitude}
                            helperText={errors.latitude ? errors.latitude.message : ''}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Longitude"
                            name="longitude"
                            inputRef={register}
                            error={!!errors.longitude}
                            helperText={errors.longitude ? errors.longitude.message : ''}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Residents"
                            name="residents"
                            type="number"
                            inputRef={register}
                            error={!!errors.residents}
                            helperText={errors.residents ? errors.residents.message : ''}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="CEP"
                            name="cep"
                            inputRef={register}
                            type="number"
                            error={!!errors.cep}
                            helperText={errors.cep ? errors.cep.message : ''}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Number"
                            name="number"
                            inputRef={register}
                            type="number"
                            error={!!errors.number}
                            helperText={errors.number ? errors.number.message : ''}
                        />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Residence was saved successfully</span>}
            />
        </Container>
    );
}