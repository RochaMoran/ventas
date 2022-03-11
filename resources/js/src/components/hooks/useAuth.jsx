import { useState } from 'react'
import { useNavigate   } from 'react-router-dom'
import { registerAuth } from '../../helpers/validates/auth'
import { useUser } from './index'

export default function useAuth(type) {
    const { login } = useUser()
    const [error, setError] = useState('')
    const navigate = useNavigate ();

    const onSubmit = async (data) => {
        const response = await registerAuth(data, type)
        
        if(response.ok){
          login(response.data);
          console.log(response)
          navigate('/')
        } else {
          setError(response.message)
        }
    };

    return {
        onSubmit,
        error
    }
}
