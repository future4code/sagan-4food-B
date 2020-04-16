import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'
// import { push } from 'connected-react-router'
// import { routes } from '../containers/Router'

export const setRestaurants = restaurantsList => ({
  type: 'SET_RESTAURANTS',
  payload: {
      restaurantsList
  }
})

export const getRestaurants = () => async (dispatch) => {
  try {
      const response = await axios.get(`${baseUrl}/restaurants`, {
          headers: {
              auth: getToken()
          }
      })
      const restaurantsList = response.data.restaurants
      dispatch(setRestaurants(restaurantsList))
  } catch (error) {
      console.error(error.message)
      alert("Não foi possível acessar os dados do usuário.")
  }
}