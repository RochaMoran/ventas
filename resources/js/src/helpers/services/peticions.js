import axios from 'axios'

export const postPeticion = async (url, body, config) => {
    const peticion = await axios.post(`/api/${url}`, body, config);
    const {data} = peticion;
 
    return data;
}

export const getPeticion = async (url, config) => {
    const peticion = await axios.get(`/api/${url}`, config);
    const {data} = peticion;
 
    return data;
}