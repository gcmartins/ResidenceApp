import axios from 'axios';

const getResidences = () => axios.get('http://localhost:8080/residence');

const addResidence = (data) => axios.post('http://localhost:8080/residence', data);

const deleteResidence = (id) => axios.delete('http://localhost:8080/residence/$id');

const ResidenceService = {
    getResidences,
    addResidence,
    deleteResidence
};


export default ResidenceService;