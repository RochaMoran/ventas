import { useState, useEffect } from 'react'
import { useUser } from './index'
import { postPeticion, getPeticion } from '../../helpers/services/peticions'

export default function useData(postUrl, getUrl) {
    const { jwt } = useUser()
    const [error, setError] = useState('')
    const [errorData, setErrorData] = useState('')
    const [data, setData] = useState([])
    const config = {
        headers: { Authorization: `Bearer ${jwt.token}` }
    };

    useEffect(async() => {
        const response = await getPeticion(getUrl, config)

        if(response.ok) setData(response.data)
        else setErrorData('Aún no hay datos registrados')
    }, [])

    const onSubmit = async (body) => {
        const response = await postPeticion(postUrl, body, config)
        
        if(response.ok){
            setData(response.data)
        } else {
            setError(response.message)
        }
    }

    return {
        error,
        data,
        errorData,
        onSubmit,
    }
}
