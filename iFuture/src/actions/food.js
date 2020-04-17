import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'

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
      alert("Não foi possível acessar a lista de restaurantes")
  }
}

export const setRestaurantDetails = (restaurantDetails) => ({
    type: 'SET_RESTAURANT_DETAILS',
    payload: {
        restaurantDetails
    }
})

export const getRestaurantDetail = (restaurantId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
            headers: {
                auth: getToken()
            }
        })
        const restaurantDetails = response.data.restaurant
        dispatch(setRestaurantDetails(restaurantDetails))
        dispatch(push(routes.restaurant))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível acessar os detalhes do restaurante selecionado")
    }
  }


export const setQuantity = (infoQuantity) => ({
    type: 'SET_QUANTITY',
    payload: {
        infoQuantity
    }
})



export const placeOrder = (placeOrderData) => async (dispatch) => {
    console.log(placeOrderData)
    try{

    } catch (error) {
        console.error(error.message)
        alert("Não foi possível realizar o pedido")
    }
}