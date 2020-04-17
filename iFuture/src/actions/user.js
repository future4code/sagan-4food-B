import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'

export const signup = (signupData) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/signup`, signupData)
        const token = response.data.token
        localStorage.setItem("token", token)
        dispatch(push(routes.adressRegister))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possivel criar seu cadastro, tente novamente mais tarde !")
    }
}

export const addAdress = (addAdressData) => async (dispatch) => {
    try {
        const response = await axios.put(`${baseUrl}/address`,
            addAdressData,
            {
                headers: {
                    auth: getToken()
                }
            })
        const token = response.data.token
        localStorage.clear()
        localStorage.setItem("token", token)

        // dispatch(setFullAddress(addAdressData))

    } catch (error) {
        console.error(error.message)
        alert("Não foi possivel cadastrar esse endereço, tente novamente mais tarde!")
    }
}

export const login = loginData => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, loginData)
        const token = response.data.token;
        localStorage.setItem('token', token)

        dispatch(push(routes.feed))
    } catch (erro) {
        console.error(erro.message)
        alert("Não foi possivel fazer o login, tente novamente mais tarde!")
    }
}



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

export const setFullAddress = (fullAddress) => ({
    type: 'SET_FULL_ADDRESS',
    payload: {
        fullAddress
    }
})

export const getFullAdress = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/profile/address`,
            {
                headers: {
                    auth: getToken()
                }
            })
            dispatch(setFullAddress(response.data.address))
    }catch(error){
        console.log(error.message)
    }
}

export const updateProfile = dataUpdateProfile => async dispatch => {
    try {
        const response = await axios.put(`${baseUrl}/profile`, dataUpdateProfile, {
            headers: {
                auth: getToken()
            }
        })

        dispatch(setProfile(response.data.user))
        dispatch(push(routes.profile))
    } catch(error) {
        console.error(error.message)
        alert("Não foi possível atualizar os dados do usuário.")
    }
}