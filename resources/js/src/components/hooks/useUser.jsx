import { useCallback, useContext } from 'react'
import {Context} from '../context/UserContext'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export default function useUser() {
    const {jwt, setJwt} = useContext(Context)

    const login = useCallback((data) => {
        setJwt(data)
        cookies.set('user', data, { path: '/' });
    }, [setJwt])
   
    const logout = useCallback(() => {
        setJwt(null)
        cookies.remove("user");
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}
