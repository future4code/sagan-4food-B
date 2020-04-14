import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'


///////////////////// AINDA NÃO INTEGRADO - depende de login (e demais)
export const setProfile = (info) => ({
    type: 'SET_PROFILE',
    payload: {
        info
    }
})

export const getProfile = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/profile`, {
            headers: {
                auth: getToken()
            }
        })
        dispatch(setProfile(response.data.user))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível acessar os dados do usuário.")
    }
}