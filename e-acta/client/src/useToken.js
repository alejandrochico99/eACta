import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const authtoken = sessionStorage.getItem('authtoken')
        return authtoken
        };
    const [token, setToken] = useState(false)

    const saveToken = authToken => {
        sessionStorage.setItem('authToken', authToken);
        setToken(authToken);
      };

    return {
    setToken: saveToken,
    token
    }
}